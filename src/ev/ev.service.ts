import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EvService {
    constructor(private readonly configService: ConfigService) { }

    getEvConfig() {
        return this.configService.get<string>('MongoDB_URL');
    }
}
