import { IsString } from "class-validator";

export class UserDocument {
    static collectionName = 'users';
    // Swagger API 이후 추가 해야함.
    // @MinLength() @MaxLength() @Matches 등 다른 조건 추가 해야함.

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}