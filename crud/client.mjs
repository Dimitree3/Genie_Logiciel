import { accountService } from "./accountService.mjs";

// Ajouter un compte
const account = accountService.addAccount("toto", "titi");

// Lister les comptes
console.log("Liste :", accountService.getAccountList());

// Modifier un compte
accountService.saveAccount(account.id, "tata", "tutu");

// Récupérer un compte
console.log("Compte :", accountService.getAccount(account.id));
