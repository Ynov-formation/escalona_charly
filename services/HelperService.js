
class HelperService {
    /**
     * Used for generate a random number using min and max
     *
     * @param min
     * @param max
     * @returns {Promise<number>}
     */
    async getRandomNumber(min = 0, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

module.exports = HelperService;