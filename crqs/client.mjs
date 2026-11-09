import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

// Ajouter un compte
const account = accountCommand.addAccount("toto", "titi");

// Lister les comptes
console.log("Liste :", accountQuery.getAccountList());

// Modifier un compte
accountCommand.saveAccount(account.id, "tata", "tutu");

// Récupérer un compte
console.log("Compte :", accountQuery.getAccount(account.id));
