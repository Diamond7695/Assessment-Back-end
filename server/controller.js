const fort =[];
let fortID = 1;
module.exports ={
    niceCompliment: (req,res)=>{
        let compliments =[
        "Cool shirt!",
        "Your Javascript skills are stellar.",
      ];
  
      // choose random compliment
      let randomIndex = Math.floor(Math.random() * compliments.length);
      let randomCompliment = compliments[randomIndex];
  
      res.status(200).send(randomCompliment);
    },
    theFurtune:(req,res)=> {
        let fortunes =[
            //list of the furtunes 
            "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
            " good friendship is often more important than a passionate romance.",
            "A fresh start will put you on your way.",
            "A lifetime of happiness lies ahead of you.",
            " smile is your personal welcome mat."
        ];
        //Picking a random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFort = fortunes[randomIndex];
        res.status(200).send(randomFort);
    
    },


    show: (req,res)=>{
        let { text } = req.body;
        let newfort ={
            text,
            id: fortID
        }
        fort.push(newfort)
        res.status(200).send(fort)

    },
    deleteInfo: (req, res) => {
        let {id} = req.params;
        let index = fort.findIndex(e => e.id == +id)
        fort.splice(index,1)
        res.status(200).send(fort)
    }
}

