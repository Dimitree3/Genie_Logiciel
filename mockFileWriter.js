export const mockFileWriter = {
    lastFileName: null,
    lastContent: null,

    write (fileName, content){
        this.lastFileName = fileName;
        this.lastContent = content;
    }
}
