import{promises as fs} from 'fs';


export  async function readJsonFile(FilePath:string):Promise<{}[]>{
    try{
        const fileContent = await fs.readFile(FilePath,'utf-8')
        return JSON.parse(fileContent)  
    }
       catch(error){
            throw new Error(`Error reading JSON file: ${error}`)
        }
}

export async function writeJsonFile(filePath:string,data:any):Promise<void>{
    try{
        const jsonContent = JSON.stringify(data, null, 2)
        await fs.writeFile(filePath,jsonContent,'utf-8')
    }
    catch(error){
        throw new Error(`Error writing JSON file: ${error}`)
    }
}
