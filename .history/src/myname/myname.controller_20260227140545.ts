import { Body, Controller, Post } from '@nestjs/common';
import { UpercasePipe } from 'src/common/pipes/upercase/upercase.pipe';

@Controller('myname')
export class MynameController {
    @Post('custom')
    transformName(@Body new UpercasePipe() name: string) {
}
