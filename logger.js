import * as fs from "fs";

const logger = {
    info (content){
        fs.appendFileSync('log.txt', content);
    }
}