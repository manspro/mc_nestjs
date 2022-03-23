import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelationsArticleAndUser1648028014614
  implements MigrationInterface
{
  name = 'RelationsArticleAndUser1648028014614';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article_entity" ADD "authorId" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "article_entity" ADD CONSTRAINT "FK_d84d3caa203db7cf1725b95b0c4" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article_entity" DROP CONSTRAINT "FK_d84d3caa203db7cf1725b95b0c4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article_entity" DROP COLUMN "authorId"`,
    );
  }
}
