export const accountCommandDAO = {
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
    
};