import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { createCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private Customers: Customer[] = [];

    getAllCustomer(): Customer[]{
        return this.Customers
    }

    addCustomer(createCustomerDto: createCustomerDto): Customer{
        const newCustomer: Customer = {
            id: Date.now(),
            ...createCustomerDto,
        }
        this.Customers.push(newCustomer);
        return newCustomer
    }
}
