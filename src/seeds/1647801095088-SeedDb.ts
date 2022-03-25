import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1647801095088 implements MigrationInterface {
  name = 'SeedDb1647801095088';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );
    //пароль 123
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('mans'), ('f@gmail.com'), ('$2b$10$ygFkaGkC9hi6UyZ7VhycFeWnfeiUZaTuYekEEvD9QNk.LkIk.7Nve')`,
    );
  }

  public async down(): Promise<void> {}
}
