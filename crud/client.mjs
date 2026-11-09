import { accountService } from "./accountService.mjs";


accountService.addAccount("toto", "titi");
const result = accountService.getAccountList();
console.log(result);
