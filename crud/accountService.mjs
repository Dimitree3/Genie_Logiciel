import { Account } from "./account.mjs";
import { accountDAO } from "./accountDAO.mjs";

export const accountService = {
  addAccount(lastName, firstName) {
    const account = new Account(undefined, lastName, firstName);
    accountDAO.insertAccount(account);
    return account;
  },
  getAccountList() {
    return accountDAO.retrieveAccountList();
  },
  saveAccount(id, lastName, firstName) {
    const existing = accountDAO.retrieveAccount(id);
    if (!existing) {
      throw new Error(`Compte ${id} introuvable`);
    }
    const account = new Account(id, lastName, firstName, existing.creationDate);
    accountDAO.updateAccount(account);
    return account;
  },
  getAccount(id) {
    return accountDAO.retrieveAccount(id);
  },
};
