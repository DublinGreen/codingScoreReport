// Return Grade and number of scores within that grade in descending order
// if grade is greater than the elite grade max, return a elite grade

// test input 
// [330, 723, 730, 825]
// [500, 501, 600, 850]
// [650, 620, 777, 301]

function codingScoreReport(scores) {
    let returnStringArray  = [];
    let gradeResultObj;

    let gradePoor = {min:300,max:599,grade:"Poor",count: 0,position: 0};
    let gradeFair = {min:600,max:699,grade: "Fair",count: 0,position: 1};
    let gradeGood = {min:700,max:749,grade:"Good",count: 0,position: 2};
    let gradeExellent = {min:750,max:799,grade:"Excellent",count:0,position: 3};
    let gradeElite = {min:800, max:850,grade:"Elite",count:0,position: 4};

    for (position in scores) {
        //console.log("position : " + scores[position]);
        if(scores[position] >= gradePoor.min && scores[position] <= gradePoor.max){
            gradePoor.count = gradePoor.count + 1;
        }else if(scores[position] >= gradeFair.min && scores[position] <= gradeFair.max){
            gradeFair.count = gradeFair.count + 1;
        }else if(scores[position] >= gradeGood.min && scores[position] <= gradeGood.max){
            gradeGood.count = gradeGood.count + 1;
        }else if(scores[position] >= gradeExellent.min && scores[position] <= gradeExellent.max){
            gradeExellent.count = gradeExellent.count + 1;
        }else if(scores[position] >= gradeElite.min){
            gradeElite.count = gradeElite.count + 1;
        }
    }
    gradeResultObj = [gradePoor,gradeFair,gradeGood,gradeExellent,gradeElite]; // array of grade objects

    // sort the gradeResultObj
    let result = gradeResultObj.sort(function(a, b) {
        return parseFloat(a.count) - parseFloat(b.count)
    });
    result = result.reverse(); // reserse the order, this become descending (top to bottom)

    for (obj in result) {
        if(result[obj].count > 0){
            returnStringArray.push(`${result[obj].grade} - ${result[obj].count}`); // push to returnStringArray
        }
    }
    
    return returnStringArray;
}


let input = [330, 723, 730, 825];
let input2 = [500, 501, 600, 850];
let input3 = [650, 620, 777, 301];
let returnValue = codingScoreReport(input3);
console.log(returnValue);
