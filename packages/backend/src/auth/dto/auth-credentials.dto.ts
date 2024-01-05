import { IsString } from "class-validator";

export class AuthCredentialsDto {
    // 조금 더 조건 추가.
    @IsString()
    email: string;

    @IsString()
    password: string;
}