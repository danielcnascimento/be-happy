import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanage1602710032909 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // REALIZAR ALTERAÇÕES
        // CRIAR TABELAS, CRIAR UM NOVO CAMPO EM UMA TABELA
        // DELETAR ALGUM CAMPO
      await queryRunner.createTable(new Table({ 
        name:"orphanages",
        columns:[
          {
            name: "id",
            type:"integer",
            unsigned:true,
            isPrimary:true,
            isGenerated:true,
            generationStrategy:"increment"
          },
          {
            name:"name",
            type:"varchar"
          },
          {
            name:"latitude",
            type:"decimal",
            scale:10,
            precision:2
          },
          {
            name:"longitude",
            type:"decimal",
            scale:10,
            precision:2
          },
          {
            name:"about",
            type:"text",
          },
          {
            name:"instruction",
            type:"text",
          },
          {
            name:"opening_hours",
            type:"varchar",
          },
          {
            name:"open_on_weekends",
            type:"boolean",
            default:false,
          }
        ],
      }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // DESFAZER AS AÇÕES FEITAS NO UP
        // DESFAZER O QUE FOI FEITO NO UP
        await queryRunner.dropTable("orphanages");
    }

}
