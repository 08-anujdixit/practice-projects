import conf from '../conf/conf.js';
import {Permission, Role} from 'appwrite';
import {Client, ID, Databases, Storage, Query} from 'appwrite'; 


class Service{
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

    async createPost({title, content, slug, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                },
            );
        } catch (error) {
            console.log("APPWRITE : CREATE POST ERROR : CONFIG SERVICE ERROR ", error);
        }
    }

    async updatePost(postId ,{title,content,slug, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                postId,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log('APPWRITE : UPDATE DOCUMENT ERROR : APPWRITE : CONFIG : ', error);
        }
    }

    async deletePost(postId){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                postId,
            );
            return true;
        } catch (error) {
            console.log("APPWRITE : DELETE POST ERROR : APPWRITE CONFIG SERVICE ERROR : ",error);
            return false;
        }
    }

    async getPost(postId){
        try {
                return await this.databases.getDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    postId,
                ); 
        } catch (error) {
            console.log('APPWRITE : GET POST ERROR : CONFIG FILE SERVICE :', error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            );
        } catch (error) {
            console.log("APPWRITE : GET POSTS ERROR : APPWRITE CONFIG SERVICE ERROR : ", error);
            return false;
        }
    }


    // File methods : 

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("APPWRITE: UPLOAD FILE ERROR: CONFIG SERVICE ERROR ",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.log("APPWRITE: DELETE FILE ERROR : CONFIG SERVICE ERROR : ", error);
            return false;
        }
    }

    getFileView(fileId){
        return this.bucket.getFileView(conf.appwriteBucketId, fileId);
    }

}

const service = new Service();
export default service;