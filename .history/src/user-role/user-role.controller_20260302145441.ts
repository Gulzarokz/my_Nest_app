import { Controller, Get, UseGuards, } from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.enmus';
import { RolesGuard } from 'src/guards/roles/roles.guard';


@Controller('user-role')
export class UserRoleController {
    @Get()
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAllAdmin() {
        return "This route can only be accessed by admin users";
    }

    @Get("user")
    getAllUser() {
        return "This route can be accessed by all users";
    }
}
