import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-role')
export class UserRoleController {
    @Get('Admin-data')
    @UseGuards(RolesGuard)
}
