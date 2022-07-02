let data = {
        name: "Allan",
        avatar: "https://github.com/allan217.png",
        "monthly-budget": 3000,
        "days-oer-week": 5,
        "hours-per-day": 5,
        "vacation-per-year": 4,
        "value-hour": 75,
};

module.exports = {
    get() {
        return data;
    },
    update(newData) {
        data = newData;
    }
}