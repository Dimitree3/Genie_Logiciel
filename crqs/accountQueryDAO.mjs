export const accountQueryDAO = {
    retrieveAccountList() {
        return ACCOUNT_LIST.map((account) => {
          const { creationDate, ...rest } = account;
          return rest;
        });
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