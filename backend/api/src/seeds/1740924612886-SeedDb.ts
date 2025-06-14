import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedDb1740924612886 implements MigrationInterface {
    name = 'SeedDb1740924612886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO tags (name) VALUES ('dragons'), ('coffe'), ('nsetjs')`,
            );

        // password is testpass
        await queryRunner.query(
            `INSERT INTO users (username, email, password) VALUES ('testuser', 'testuser@testuser.com', '')`,
        );

        await queryRunner.query(
            `INSERT INTO articles (slug, title, description, body, "tagList", "authorId")
             VALUES ('first-article', 'first-article', 'first-article', 'first-article', 'coffe,dragons', 1)`,
        );

        await queryRunner.query(
            `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") 
             VALUES ('second-article', 'second-article', 'second-article', 'second-article', 'coffe,dragons', 1)`,
        );
    }



    public async down(queryRunner: QueryRunner): Promise<void> {}

}
