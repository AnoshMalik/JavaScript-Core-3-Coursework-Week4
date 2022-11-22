function sales(carsSold) {
    let totalVal = {};
    // for (let object of carsSold) {
    //     // let x = object.filter(value => value.price);
    //     // totalVal += `${object.make} : ${object.price} `; 
    //     console.log(Object.keys(object));
    
    // }
    console.log(carsSold.filter(value => value.make == "Land Rover"));    

}

module.exports = sales;
