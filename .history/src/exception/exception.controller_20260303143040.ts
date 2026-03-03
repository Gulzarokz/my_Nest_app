import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('exception')
export class ExceptionController {
    @Get('hello/:id')
    getHello(@Param('id') id: ParseIntPipe)
}
