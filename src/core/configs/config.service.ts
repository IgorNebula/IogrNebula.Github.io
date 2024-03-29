import {config, DotenvParseOutput } from "dotenv";
import { IConfigService } from "./Config.InterfaceConfig";

export class ConfigService implements IConfigService{
    private config: DotenvParseOutput;
    constructor(){
       const {error,parsed} = config();
       if(error){
        throw new Error('не найден файл .env');
       }
       if(!parsed){
        throw new Error('пустой файл .env');
       }
       this.config = parsed;
        }
         
     get(key: string): string {
        const res = this.config[key];
        if(!res){
         throw new Error('нет требуемого ключа');   
        } 
        return res;      
    }
}