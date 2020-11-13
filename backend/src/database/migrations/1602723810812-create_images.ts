import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602723810812 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
          name:"images",
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
                name: "path",
                type:"varchar",
              },
              {
                name: "orphanage_id",
                type:"integer",
              }
          ],
          foreignKeys: [
            {
              name: "ImageOrphanage",
              columnNames: ["orphanage_id"],
              referencedTableName: "orphanages",
              referencedColumnNames: ["id"],
              onDelete: "CASCADE", // apaga todas as imagens vinculado a esse ID
              onUpdate: "CASCADE", // atualiza todas as imagens com essa ID quando essa ID for atualizada
            }
          ]
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }

}
