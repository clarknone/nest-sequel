import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import BlogModel from './model/blog.model';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(BlogModel)
    private blogModel: typeof BlogModel,
  ) {}

  create(createBlogDto: CreateBlogDto): Promise<BlogModel> {
    return this.blogModel.create({ ...createBlogDto });
  }

  findAll(): Promise<BlogModel[]> {
    return this.blogModel.findAll();
  }

  findOne(id: number): Promise<BlogModel> {
    return this.blogModel.findOne({ where: { id } });
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.blogModel.update({ ...updateBlogDto }, { where: { id } });
  }

  remove(id: number) {
    return this.blogModel.destroy({ where: { id } });
  }
}
