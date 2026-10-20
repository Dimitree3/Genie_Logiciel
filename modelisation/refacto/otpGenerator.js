export class OtpGenerator {
    generate() {
        const randomSeed = Math.floor(Math.random() * 100);
        const timeSeed = Date.now() % 100;
        return `${randomSeed}${timeSeed}`;
    }
}
