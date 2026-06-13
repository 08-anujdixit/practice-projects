import conf from '../conf/conf.js';
import {Permission, Role} from 'appwrite';
import {Client, ID, Databases, Storage, Query} from 'appwrite'; 


export class Service{
    client =  new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setProject(conf.appwriteProjectId)
            .setEndpoint(conf.appwriteURL);
        
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);    
    }
}