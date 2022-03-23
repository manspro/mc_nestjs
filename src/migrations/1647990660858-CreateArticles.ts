import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateArticles1647990660858 implements MigrationInterface {
    name = 'CreateArticles1647990660858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "article_entity" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "body" character varying NOT NULL DEFAULT '', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "tagList" text NOT NULL, "favoriteCount" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_362cadb16e72c369a1406924e2d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "article_entity"`);
    }

}
