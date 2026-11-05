import { fileWriter } from './fileWriter.mjs'

export const logger = {
    info (content){
        console.log(content);

        const line = `${new Date().toISOString()} : ${content}\n`;
        fileWriter.appendTo('log.txt', line);
    }
}
