import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { TestUserDto } from './dto/test.dto';
import { AuthService } from 'src/auth/auth.service';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('users')
export class UsersController {
    private logger = new Logger('UsersController');
    constructor(
        private readonly usersSerivce: UsersService,
        private readonly authService: AuthService,
        ) {}

    @Post('create')
    createUser(@Body() userDocument: TestUserDto) {
        this.logger.log('createUser');
        return this.usersSerivce.createUser(userDocument);
    }

    @Post('signin')
    signIn(@Body() authCredentialsDto: AuthCredentialsDto) {
        this.logger.log('User signing in... :' + authCredentialsDto.email);
        return this.authService.signIn(authCredentialsDto);
    }

    @Get('all')
    getAllUsers() {
        return this.usersSerivce.findAll();
    }

    // simple test for auth guard & jwt.
    @Get('token-test')
    @UseGuards(JwtAuthGuard)
    tokenTest() {
        return 'token test success';
    }
}
