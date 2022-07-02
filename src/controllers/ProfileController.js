 const Profile = require('../model/Profile')
 
 module.exports =  {
        index(req, res) {
         return res.render("profile", {profile: Profile.get()})
        },
        update(req, res) {
            // req.body para pegar os dados
            const data = req.body
            //definir quantas semanas tem num ano: 52
            const weeksPerYear = 52
            // remover as semanas de ferias do ano, para pegar quantas semanas tem 1 mes
            const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12
            // Total de hioras trabalhadas na semana
            const weekTotalHours = data["hours-per-day"] * data["days-per-week"]
            // Total de horas trabalhadas no mês
            const monthlyTotalHours = weekTotalHours * weeksPerMonth
            // Qual será o valor da minha hora?
            const valueHour = data["monthly-budget"] / monthlyTotalHours


            Profile.update({
                ...Profile.get(),
                ...req.body,
                "value-hour": valueHour
            }) 

            return res.redirect('/profile')
        }
    }