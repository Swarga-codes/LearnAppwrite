import { Client, Account, ID } from 'appwrite';
const client = new Client();
client
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject('645f5e9b87c31ce1a65a');

const account = new Account(client);
export default function RegisterUser(email,username,pass){
    const result = account.create(
        ID.unique(), 
        email,
        pass,
        username,
      );
    result.then(response=>console.log('User regsitered successfully ...'))
    .catch(err=>console.log(err))
}            
