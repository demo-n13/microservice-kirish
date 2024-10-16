import { Injectable } from '@nestjs/common';
import { CategoryClient } from './category.client';

@Injectable()
export class CategoryService {
  constructor(private categoryClient: CategoryClient) {}

  getCategoryList() {
    return this.categoryClient.getAllCategories();
  }

  createCategory(name: string) {
    return this.categoryClient.createCategory(name);
  }

  deleteCategory(id: number) {
    return this.categoryClient.deleteCategory(id)
  }
}
