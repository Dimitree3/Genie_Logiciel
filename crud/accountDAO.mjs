import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("BDD :", ACCOUNT_LIST);
  },
  retrieveAccountList() {
    return ACCOUNT_LIST.map((account) => {
      const { creationDate, ...rest } = account;
      return rest;
    });
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
  retrieveAccount(id) {
    const account = ACCOUNT_LIST.find((a) => a.id === id);
    if (!account) {
      return undefined;
    }
    const { lastName, firstName, ...rest } = account;
    return { ...rest, name: `${lastName} ${firstName}` };
  },
};
