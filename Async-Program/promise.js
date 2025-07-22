function getcheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese  = '🧀'
            resolve(cheese)
        },2000)
    })
}

function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const Dough  = cheese + '🍩'
            resolve(Dough)
        },2000)
    })
}

function getpizza(Dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza  = Dough + '🍕'
            resolve(pizza)
        },2000)
    })
}

//Promise channing
// getcheese()
//     .then((cheese)=>{
//             console.log('here is cheese',cheese);
//             return makeDough(cheese)
//         }).then((Dough)=>{
//             console.log('here is dough',Dough);
//             return getpizza(Dough)
//         }).then((pizza)=>{
//             console.log('Your pizza is ready',pizza);
//         })

// promise using Async Await

async function orderPizza(){
    const cheese = await getcheese()
    console.log('here is your cheese',cheese);
    const Dough = await makeDough(cheese)
    console.log('here is your Dough',Dough);
    const pizza = await getpizza(Dough)
    console.log('Your pizza is Ready',pizza);
}
orderPizza()