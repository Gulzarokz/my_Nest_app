import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { ExcetionFilterFilter } from 'src/filters/excetion-filter/excetion-filter.filter';

@Controller('exception')
@UseFilters(ExcetionFilterFilter)
export class ExceptionController {
    @Get('hello/:id')
    getHello(@Param('id', ParseIntPipe) id: number) {
        return `hello ${id}`;
    }
}
