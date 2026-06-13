import conf from '../conf/conf.js';
import {Client, ID, Account} from 'appwrite';

export class AuthService{
    client = new Client();
    account;


    constructor(){
        this.client
        .setProject(conf.appwriteProjectId)
        .setEndpoint(conf.appwriteURL);

        this.account = new Account(this.client);
    }

    async createAccount({name, email, password}){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name);

            if(userAccount){
                const session = await this.login({email, password});
                console.log("Session Created", session);
                return session;
            }else{
                return userAccount;
            }    

        } catch (error) {
            console.log('APPWRITE: CREATE ACCOUNT ERROR : AUTHSERVICE : ERROR :', error);

        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("APPWRITE : LOGIN ERROR : AUTHSERVICE : ERROR : ", error);
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("APPWRITE : GET CURRENT USER ERROR : AUTHSERVICE: ERROR : ",error  );
        }
        return null;
    }

    async logout(){
        try{
            return this.account.deleteSessions();
        }catch(error){
            console.log('APPWRITE: LOGOUT ERROR : AUTHSERVICE ERROR : ', error);
        }
    }
}


const authService = new AuthService();

export default authService;