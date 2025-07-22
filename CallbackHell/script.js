function getCheese(Callback){
    setTimeout(()=>{
        const cheese = '🧀'
        console.log('here is cheese'+ cheese);
        Callback(cheese)
    },2000
    )
}

function getDough(cheese,Callback){
    setTimeout(()=>{
        const dough = cheese + '🍩'
        console.log('here is dough' + dough);
        Callback(dough)
    },2000)
}


function getPizza(Callback){
    setTimeout(()=>{
        const pizza = '🍕'
        console.log('pizza is ready' + pizza);
        Callback(pizza)
    },3000)
}


getCheese((cheese)=>{
    getDough(cheese,(dough)=>{
        getPizza((pizza)=>{
            console.log('Got the tasty Pizza 😀');
        })
    })
})