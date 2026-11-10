import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { notifyAccountAdded } from "./accountNotifier.mjs";

export const accountCommand = {
    addAccount(lastName, firstName) {
        const account = new Account(undefined, lastName, firstName);
        accountCommandDAO.insertAccount(account);

        // Synchro BDD query : même compte, sans la date de création
        notifyAccountAdded(account);

        return account;
      },
    saveAccount(id, lastName, firstName) {
        // updateAccount lève déjà une erreur si le compte n'existe pas
        accountCommandDAO.updateAccount({ id, lastName, firstName });

        // Synchro BDD query (pas de date de création)
        accountCommandDAO.updateAccountSummary({ id, lastName, firstName });
      },
};
