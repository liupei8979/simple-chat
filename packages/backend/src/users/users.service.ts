import { CollectionReference } from '@google-cloud/firestore';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { UserDocument } from 'src/documents/document.user';
import { TestUserDto } from './dto/test.dto';

@Injectable()
export class UsersService {
    private logger: Logger = new Logger('UsersService');

    constructor(
        @Inject(UserDocument.collectionName)
    private usersCollection: CollectionReference<UserDocument>,
    ) {}

    async createUser(userDocument: TestUserDto): Promise<UserDocument> {
        const { name, email, password } = userDocument;
        const docRef = this.usersCollection.doc(name);
        await docRef.set({
            name,
            email,
            password,
        });
        const userDoc = await docRef.get();
        const user = userDoc.data();
        return user;
    }

    async findAll(): Promise<UserDocument[]> {
        const snapshot = await this.usersCollection.get();
        const users: UserDocument[] = [];
        snapshot.forEach(doc => users.push(doc.data()));
        return users;
    }
}
