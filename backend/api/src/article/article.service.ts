import {Injectable} from "@nestjs/common";
import {UserEntity} from "@app/user/user.entity";
import {CreateArticleDto} from "@app/article/dto/createArticle.dto";
import {ArticleEntity} from "@app/article/article.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(ArticleEntity)
        private readonly articleRepository: Repository<ArticleEntity>,
        ) {}
    async createArticle(
        currentUser: UserEntity,
        createArticleDto: CreateArticleDto):
        Promise<any> {
        const article = new ArticleEntity();
        Object.assign(article, createArticleDto);

        if(!article.tagList) {
            article.tagList = [];
        }

        article.slug = 'foo';

        article.author = currentUser;

        return await this.articleRepository.save(article);
    }
}