// Global Scope
let a = 300

if(true){
    let a = 10          // Block Scope
    const b = 30
    // console.log("Inner : ", a);
    
}

// console.log(a)

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()

// +++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++

function addOne(num){
    return num + 1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)