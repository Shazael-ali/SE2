import{promises as fs} from 'fs';

export async function parseXMLFile(filePath: string): Promise<any> {
    const { parseStringPromise } = require('xml2js');
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return await parseStringPromise(fileContent, { explicitArray: false,trim: true }); 
}catch(error){
        throw new Error(`Error parsing XML file: ${error}`)
    }
}

