import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customer: Customer[] = [];

    getAllCustomers(): Customer[] {
        return this.customer;
    }

    addCustomer(customerDto: CreateCustomerDto): Customer {
        const newCustomer: Customer = {
            id: Date.now(),
            ...customerDto
        }
        this.customer.push(newCustomer);
        return newCustomer;
    }
}

