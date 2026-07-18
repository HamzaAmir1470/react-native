import { Client, Account, Databases, Storage, Avatars } from 'react-native-appwrite';

const client = new Client();

client
    .setEndpoint(Process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(Process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID || '64b0e7f1c3d5a2e4f8b9')
    .setPlatform('app.shelfie.dev');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const avatars = new Avatars(client);

export { client };