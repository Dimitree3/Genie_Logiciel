const lines = (otp) => [
    "Bonjour,",
    `Pour vous connecter sur le portail entrez le code : ${otp}`,
    "Si vous n'êtes pas à l'origine de cette demande, contactez le support.",
];

export class SmsContent {
    build(otp) {
        return lines(otp).join("\n");
    }
}

export class EmailContent {
    build(otp) {
        return lines(otp).map(line => `<p>${line}</p>`).join("");
    }
}
