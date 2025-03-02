import {Controller, Post, UseGuards, Body} from "@nestjs/common";
import {ArticleService} from "@app/article/article.service";
import {AuthGuard} from "@app/user/guards/auth.guard";
import {User} from "@app/user/decorators/user.decorator";
import {UserEntity} from "@app/user/user.entity";
import {ArticleEntity} from "@app/article/article.entity";
import {CreateArticleDto} from "@app/article/dto/createArticle.dto";

@Controller('articles')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}
    @Post()
    @UseGuards(AuthGuard)
    async create(@User() currentUser: UserEntity, @Body('article') createArticleDto: CreateArticleDto) {
        return this.articleService.createArticle(currentUser, createArticleDto);
    }
}

