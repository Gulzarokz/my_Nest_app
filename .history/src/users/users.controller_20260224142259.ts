import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getusers() {
        return 'user data fetch successfully'
    }
}
