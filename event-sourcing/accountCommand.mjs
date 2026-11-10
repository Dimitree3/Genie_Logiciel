import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { notifyAccountAdded } from "./accountNotifier.mjs";
import { accountCache } from "./cache.mjs";
import { Event } from "./event.mjs";
import { eventStore } from "./eventStore.mjs";

export const accountCommand = {
    addAccount(lastName, firstName) {
        const account = new Account(undefined, lastName, firstName);
        eventStore.addEvent(new Event("accountAdded", account.id, account));

        // Synchro BDD query : même compte, sans la date de création
        notifyAccountAdded(account);

        // Mise en cache : clé = id du compte, nom/prénom remplacés par name
        accountCache[account.id] = {
          id: account.id,
          creationDate: account.creationDate,
          name: `${lastName} ${firstName}`,
        };

        return account;
      },
    saveAccount(id, lastName, firstName) {
        // updateAccount lève déjà une erreur si le compte n'existe pas
        accountCommandDAO.updateAccount({ id, lastName, firstName });

        // Synchro BDD query (pas de date de création)
        accountCommandDAO.updateAccountSummary({ id, lastName, firstName });

        // Mise à jour du cache (la date de création est conservée)
        accountCache[id] = { ...accountCache[id], id, name: `${lastName} ${firstName}` };
      },
};
