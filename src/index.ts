import { readJsonFile, writeJsonFile } from "./util/parsers/jsonParser";
import logger from "./util/looger";
import {readCSVFile} from './util/parsers/parser';
import { parseXMLFile } from "./util/parsers/xmlParser";


async function main(){
    const data = await readCSVFile('src/data/cake orders.csv');
    // for each data row , log the row
   data.forEach((row)=> logger.info(row))
    
    const jsonData = await readJsonFile('src/data/book orders.json');
    jsonData.forEach((jsonRow)=> logger.info(JSON.stringify(jsonRow, null,0)));

    const addjsonData = {"Order ID":"123","Book Title":"Shadows and Secrets","Author":"Agatha Christie","Genre":"Horror","Format":"Hardcover","Language":"English","Publisher":"Penguin Random House","Special Edition":"Illustrated Edition","Packaging":"Luxury Box","Price":"33","Quantity":"2"};
    const newJsonData = [...jsonData, addjsonData];
    await writeJsonFile('src/data/book orders.json', newJsonData);

    const readXML = await parseXMLFile('src/data/toy orders.xml');

    jsonData.forEach((jsonRow)=> logger.info(JSON.stringify(readXML,null,1)));
   
}


main();
