
export class PlayWrightHelper {

    /**
      * Generates a random alphanumeric string of the specified length.
      * 
      * @param numberOfCharacters - The number of characters in the generated string.
      * @returns - The random alphanumeric string.
      */
    getAlphabeticString(numberOfCharecter: number) {
        const alphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvxyz";

        let randomString = "";
        for (let i = 0; i < numberOfCharecter; i++) {
            const index = Math.floor(Math.random() * alphaNumericString.length);
            randomString += alphaNumericString.charAt(index);
        }
        return randomString;
    }
}