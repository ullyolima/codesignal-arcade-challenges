//  ====> Challenge description <====
//  Ratiorg got statues of different sizes as a 
//  present from CodeMaster for his birthday, 
//  each statue having an non-negative integer size. 
//  Since he likes to make things perfect, 
//  he wants to arrange them from smallest to largest 
//  so that each statue will be bigger than the previous one exactly by 1. 
//  He may need some additional statues to be able to accomplish that. 
//  Help him figure out the minimum number of additional statues needed.

//  ====> Example <====
//  For statues = [6, 2, 3, 8], the output should be
//  makeArrayConsecutive2(statues) = 3.

//  Ratiorg needs statues of sizes 4, 5 and 7.

//  ====> CodeSignal Site <====
//  Find this and more challenges in https://app.codesignal.com/arcade/intro/level-2



function makeArrayConsecutive2(statues) {
    let missingStatues = 0
    let savedStatue

    statues.sort(function(a, b){
        return a - b
    })

    for(let statue of statues) {
        let statuesInBetween = (statue - savedStatue) - 1
        if(statuesInBetween > 0){
            missingStatues += statuesInBetween
        }
        savedStatue = statue
    }
    return missingStatues
}

makeArrayConsecutive2([6, 2, 3, 8])
 