import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { TestUserDto } from './dto/test.dto';

@Controller('users')
export class UsersController {
    private logger = new Logger('UsersController');
    constructor(private readonly usersSerivce: UsersService) {}

    @Post('create')
    createUser(@Body() userDocument: TestUserDto) {
        this.logger.log('createUser');
        return this.usersSerivce.createUser(userDocument);
    }

    @Get('all')
    getAllUsers() {
        return this.usersSerivce.findAll();
    }

}
