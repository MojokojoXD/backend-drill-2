const houses = require('./db.json');
let globalIndex = 3;


module.exports = {
    getHouses: (req,res)=>{
        res.status(200).send(houses);
    },
    deleteHouse: (req,res)=>{
        houses.forEach((currentHouse,index) => {
            if(currentHouse.id === Number(req.params.id))
            {
                houses.splice(index,1);
            }
        })
        globalIndex--;
        res.status(200).send(houses);
    },
    createHouse: (req,res)=>{
        let {address,price,imageURL} = req.body;
        globalIndex++;
        let newHouse = {
            id : globalIndex,
            address,
            price: Number(price),
            imageURL
        }
        houses.push(newHouse);
        res.status(200).send(houses);
    },
    updateHouse: (req,res)=>{
        houses.forEach((currentHouse,index) => {
            if(currentHouse.id === Number(req.params.houseToUpdate))
            {
                houses[index].price += 1;
            }
        })

        res.status(200).send(houses);
    }
}