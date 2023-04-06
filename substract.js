module.exports = function substract(a,b){
    const res = a+b
    if(Number.isNaN(res)){
        throw new Error("Invalid Operation")
    }
    return res 
} 