const logger = {
    info (content){
        fs.appendFileSync('log.txt', content);
    }
}