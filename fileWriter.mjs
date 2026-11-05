import * as fs from "fs";

export const fileWriter = {
    appendTo (fileName, content){
        fs.appendFileSync(fileName, content);
    }
}
