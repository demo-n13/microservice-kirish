import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dtos';

@ApiTags('Category')
@Controller('categories')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Get()
  getCategories() {
    return this.service.getCategoryList();
  }

  @Post()
  createCategory(@Body() payload: CreateCategoryDto) {
    return this.service.createCategory(payload.name);
  }

  @Delete("/:id")
  deleteCategory(@Param("id", ParseIntPipe) id: number) {
    return this.service.deleteCategory(id);
  }
}
