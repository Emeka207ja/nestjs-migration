import { MigrationInterface, QueryRunner } from "typeorm";

export class Profile1697192354822 implements MigrationInterface {
    name = 'Profile1697192354822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "lastname" character varying NOT NULL, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}
