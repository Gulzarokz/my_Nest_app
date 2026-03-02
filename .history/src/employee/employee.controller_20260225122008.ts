import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getEmployees() {
        return "fetching all employees data successfully";
    }
