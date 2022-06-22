module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
    getFortune: (req, res) => {
        const fortunes = [
            "Soon you will be as free as a fish.",
            "One day the sun will set in the East.",
            "Don't trust a Libra.",
            "Eat veggies once in a while!",
            "Say yes to all questions.",
        ]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    }

}