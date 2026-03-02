import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getCategoryList() {
        return ["loptop", "mobile", "tv", "fridge"];
    }
}
