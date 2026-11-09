import { Account } from "./account.mjs";
import { accountDAO } from "./accountQueryDAO.mjs";

export const accountQuery = {
    getAccountList() {
        return accountQueryDAO.retrieveAccountList();
      },
    getAccount(id) {
        return accountQueryDAO.retrieveAccount(id);
      },
};