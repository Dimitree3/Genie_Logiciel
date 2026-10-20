import { LibGsmSms } from "../libGSM.js";
import { LibSmtpEmail } from "../libSMTP.js";

export class SmsSender {
    constructor(gsmClient, smscNumber, senderNumber) {
        this.client = gsmClient;
        this.smscNumber = smscNumber;
        this.senderNumber = senderNumber;
    }

    recipientOf(account) {
        return account.phoneNumber;
    }

    send(recipient, content) {
        this.client.attachToSMSC(this.smscNumber);
        const sms = new LibGsmSms();
        sms.senderNum = this.senderNumber;
        sms.num = recipient;
        sms.payload = content;
        this.client.routeSMS(sms);
    }
}

export class EmailSender {
    constructor(smtpClient, senderAddress) {
        this.client = smtpClient;
        this.senderAddress = senderAddress;
    }

    recipientOf(account) {
        return account.email;
    }

    send(recipient, content) {
        this.client.connect();
        const email = new LibSmtpEmail();
        email.senderAddress = this.senderAddress;
        email.recipientAddress = recipient;
        email.content = content;
        this.client.send(email);
    }
}
