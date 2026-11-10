import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

export const accountCommandDAO = {
    // ----- BDD command -----
    insertAccount(account) {
        ACCOUNT_LIST.push(account);
        console.log("BDD :", ACCOUNT_LIST);
      },
    updateAccount(account) {
        const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
        if (index === -1) {
          throw new Error(`Compte ${account.id} introuvable`);
        }
        ACCOUNT_LIST[index].lastName = account.lastName;
        ACCOUNT_LIST[index].firstName = account.firstName;
        console.log("BDD :", ACCOUNT_LIST);
      },

    // ----- BDD query -----
    insertAccountSummary(summary) {
        accountSummaryList.push(summary);
        console.log("BDD query :", accountSummaryList);
      },
    updateAccountSummary(summary) {
        const index = accountSummaryList.findIndex((a) => a.id === summary.id);
        if (index === -1) {
          throw new Error(`Compte ${summary.id} introuvable dans la BDD query`);
        }
        accountSummaryList[index] = summary;
        console.log("BDD query :", accountSummaryList);
      },
};