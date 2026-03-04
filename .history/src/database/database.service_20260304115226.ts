import { Injectable, OnModuleInit } from '@nestjs/common';


@Injectable()
export class DatabaseService {
    private isConnected = false;

    onModuleInit() {
        this.isConnected = true;
        console.log('Database connected');
    }

}
