import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstnameChanged1697191300424 implements MigrationInterface {
    name = 'FirstnameChanged1697191300424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "firstname" character varying NOT NULL, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }

}
