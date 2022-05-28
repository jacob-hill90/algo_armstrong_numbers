
exports.findArmstrongNumbers = function(arr) {
    
    let answer = []
    
    for(let i of arr){
        if(i < 10){
            if(i === (Math.pow(i.toString()[0], 1))){
                answer.push(i)
            }
        }
        if(i < 100){
            if(i === (Math.pow(i.toString()[0], 2) + Math.pow(i.toString()[1], 2))){
                answer.push(i)
            }
        }
        if(i < 1000){
            if(i === (Math.pow(i.toString()[0], 3) + Math.pow(i.toString()[1], 3) + Math.pow(i.toString()[2], 3))){
                answer.push(i)
            }
        }
    }
    return answer
}
