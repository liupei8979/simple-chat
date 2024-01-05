import { UserDocument } from "src/documents/document.user";

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions'
export const FirestoreCollectionProviders: string[] = [
    UserDocument.collectionName,
];