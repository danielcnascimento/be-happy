//dentro do controller, podemos responder as request do front, ou do usuário, quando o backend for requisitado

import { Request, Response } from 'express';
import {getRepository} from 'typeorm';
import * as Yup from 'yup';

import Orphanage_view from '../views/orphanages_view';

import Orphanage from '../models/Orphanage'; //o typeorm retorna cada linha (resultado) em forma de classe


export default {

    //lista os orfanatos criados
    //quando o front ou client consume a API com o get params, aqui nos retornamos todos os items no nosso BD.
    async index(request: Request, response: Response){
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find({
            relations:["images"]
        });

        return response.json(Orphanage_view.renderMany(orphanages));
    },

    //pesquisa os detalhes de um orfanato, ele envia um parametro, que no caso é o ID,
    //e aqui recuperamos o ID e buscamos no banco de dados as suas informações.
    async show(request: Request, response: Response){
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage); 

        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations:["images"]
        });

        return response.json(Orphanage_view.render(orphanage));
    },

    //cria um novo orfanato
    //quando chamado pelo routes, pegamos o body, lemos, validamos, e assim criamos um registro no banco.
    async create(request : Request, response : Response){
        //console.log(request.files);

        const {
            name,
            latitude,
            longitude,
            about,
            instruction,
            opening_hours,
            open_on_weekends
         } = request.body;
     
         const orphanagesRepository = getRepository(Orphanage);

         const requestImages = request.files as Express.Multer.File[]; //upload de multiplos arquivos

         //pegando a imagem enviada pelo client
         const images = requestImages.map(image => {
            return {path: image.filename} 
         })
         
         //lendo os campos que o usuário deve preencher e dar o request
         const data = {
            name,
            latitude,
            longitude,
            about,
            instruction,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true',
            images,
         }

         //usando schema para validar os campos
         const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().max(300).required(),
            instruction: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(
            Yup.object().shape({
                    path: Yup.string().required()
            }))
         });

         //valida os campos e aguarda todos os outros serem validados
         await schema.validate(data, {
             abortEarly : false,
         })

         //query create
         //create "orphanage" to eventually return success message
         //send data to database using the getRepository(Orphanages) method
        const orphanage = orphanagesRepository.create(data);
     
         //salva no banco
        await orphanagesRepository.save(orphanage); 
     
        response.status(201).json(orphanage); 
    }
};