import { accountCache } from "./cache.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

export const accountQueryDAO = {
    retrieveAccountList() {
        // Lecture depuis la BDD dédiée aux query (copie pour ne pas exposer la BDD)
        return accountSummaryList.map((account) => ({ ...account }));
      },
    retrieveAccount(id) {
        // Lecture depuis le cache (copie pour ne pas exposer le cache)
        const account = accountCache[id];
        return account ? { ...account } : undefined;
      },
};