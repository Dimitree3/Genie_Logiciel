// index.mjs
import * as fs from "fs";

const logger = {
    info (content){
        fs.appendFileSync('log.txt', content);
    }
}

logger.info("Message à caractère informatif");
logger.info("un autre message");