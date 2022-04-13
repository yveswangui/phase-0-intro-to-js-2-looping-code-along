
function writeCards(names,randomName){
    for(i = 0; i < names.length; i++){
        let newArray = []
        let message = `Thank you, ${names[i]} , for the wonderful ${randomName} gift!`
        newArray.push(message)
        return newArray
    }
}
writeCards(["Guadalupe", "Ollie", "Aki"],"surprise")
