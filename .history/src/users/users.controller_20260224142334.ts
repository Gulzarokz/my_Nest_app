import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {
    ()
getUsers() {
    return 'user data fetch successfully'
}
}
