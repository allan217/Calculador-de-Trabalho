let data = [
    {
        id: 1,
        name: "Pizzaria Guluso",
        "daily-hours": 2,
        "total-hours": 1,
        created_at: Date.now()
    },
    {
        id: 2,
        name: "Padaria Pão Bão",
        "daily-hours": 3,
        "total-hours": 47,
        created_at: Date.now()
    }
];

module.exports = {
    get() {
        return data
    },
    update(newJob) {
        data = newJob
    },
    delete(id){
        data = data.filter(job => Number(job.id) !== Number(id))
    }
}