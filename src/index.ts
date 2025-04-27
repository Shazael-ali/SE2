import logger from "./util/looger";
import {readCSVFile} from './util/parser';


async function main(){
    const data = await readCSVFile('src/data/cake orders.csv');
    // for each data row , log the row
    data.forEach((row)=> logger.info(row))
       
    
}
main();
