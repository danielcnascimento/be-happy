import {ErrorRequestHandler} from 'express';
import {ValidationError} from 'yup';

interface ValidationErrors {
    [Key: string]: string[];
}
 
const errorHandler:  ErrorRequestHandler = (error, request, response, next) => {

    if(error instanceof ValidationError){
        let errors : ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });

        return response.status(400).json({message: 'Encontrei alguns erros de validação: ', errors})
    }

    console.error(error.stack);

    return response.status(500).json({message: "Internal server error"});
}

export default errorHandler;