import { accountCommandDAO } from "./accountCommandDAO.mjs";

export function notifyAccountAdded(account) {
    const { creationDate, ...summary } = account;
    accountCommandDAO.insertAccountSummary(summary);
}
