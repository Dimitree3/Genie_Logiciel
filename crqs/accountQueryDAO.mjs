import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

export const accountQueryDAO = {
    retrieveAccountList() {
        // Lecture depuis la BDD dédiée aux query (copie pour ne pas exposer la BDD)
        return accountSummaryList.map((account) => ({ ...account }));
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