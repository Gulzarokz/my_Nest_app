import { Body, Controller, Post } from '@nestjs/common';

@Controller('myname')
export class MynameController {
    @Post('custom')
    transformName(@Body new )
}
