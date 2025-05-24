
import { readCSVFile } from "./util/parsers/parser";
import { CSVCakeMapper } from "./mappers/CakeMapper";
import logger from "./util/looger";
import { CSVOrderMapper } from "./mappers/OrderMapper";
import { readJsonFile } from "./util/parsers/jsonParser";
import { JSONBookMapper } from "./mappers/BookMapper";
import { parseXMLFile } from "./util/parsers/xmlParser";
import { XMLToyMapper } from "./mappers/toy.mapper";


async function main() {
   const data = await readCSVFile('src/data/cake orders.csv');
   const cakeMapper = new CSVCakeMapper();
    const orderMapper = new CSVOrderMapper(cakeMapper);
    const cakes= data.map((row)=>orderMapper.map(row));
    logger.info('Cakes %o', cakes);


}

async function BookMapper(){
  const data = await readJsonFile('src/data/book orders.json');
  const BookMapper = new JSONBookMapper();
  const orderMapper = new CSVOrderMapper(BookMapper);
  const book= data.map((row)=>orderMapper.map(row));
  logger.info('book %o', book);
}

async function ToyMapper(){

   const res = await parseXMLFile("src/data/toy orders.xml");
    const toyMapper = new XMLToyMapper();
    const orderMapper = new CSVOrderMapper(toyMapper);
    const orders = res.data.row.map((row: {} | []) => orderMapper.map(row));
    
    logger.info("List of orders: \n %o", orders);

}
// main();
 BookMapper();
// ToyMapper();
