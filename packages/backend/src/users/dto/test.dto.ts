import { IsNotEmpty } from "class-validator";

export class TestUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}