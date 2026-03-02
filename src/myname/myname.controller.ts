import { Body, Controller, Post } from '@nestjs/common';
import { UpercasePipe } from 'src/common/pipes/upercase/upercase.pipe';

@Controller('myname')
export class MynameController {
    @Post('custom')
    transformName(@Body('name', new UpercasePipe()) name: string) {
        return { message: `my name is ${name}` };
    }
}
