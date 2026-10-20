import { database } from "../database.js";
import { libGsmClient } from "../libGSM.js";
import { libSmtpClient } from "../libSMTP.js";
import { OtpGenerator } from "./otpGenerator.js";
import { SmsContent, EmailContent } from "./content.js";
import { SmsSender, EmailSender } from "./sender.js";

const smscNumber = "+33 6 89 00 40 00";

export function createOtpSender({ database, generator, sms, email }) {
    return function sendOTP(accountId) {
        const account = database.fetchAccount(accountId);
        const { content, sender } = account.preferSMS ? sms : email;

        const otp = generator.generate();
        sender.send(sender.recipientOf(account), content.build(otp));
    };
}

export const sendOTP = createOtpSender({
    database,
    generator: new OtpGenerator(),
    sms: {
        content: new SmsContent(),
        sender: new SmsSender(libGsmClient, smscNumber, "+33 7 12 34 56 78"),
    },
    email: {
        content: new EmailContent(),
        sender: new EmailSender(libSmtpClient, "noreply@auth.com"),
    },
});
