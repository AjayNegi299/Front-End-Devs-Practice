const question = [{
   'ques': 'What is the Markup language?',
   'a': 'Html',
   'b':'CSS',
   'c': 'JavaScript',
   'd': 'react',
   'correct': 'a'
},
{
    'ques': 'What year was javascript launched?',
   'a': '1996',
   'b':'1995',
   'c': '1994',
   'd': 'none of the above',
   'correct': 'b'
},
{
    'ques': 'What does CSS stands for?',
   'a': 'cascading style sheet',
   'b':'Hyper text markup language',
   'c': 'jason Object Notation',
   'd': 'Makicopters terminal Motorboats',
   'correct': 'a'
}]

let index = 0
let right = 0
let wrong = 0
const total = question.length
const quesBox = document.getElementById('quebox')
const optionbox = document.querySelectorAll('.option') 
const submitButton = document.querySelector('button')
const QuizLoaders=()=>{
    if(index===total){
        return quizEnd()
    }
    reset()
    let data = question[index]    
    quesBox.innerHTML = `${data.ques}`
    const option = [data.a,data.b,data.c,data.d]
    optionbox.forEach((ele,index)=>{
        ele.nextElementSibling.innerHTML = option[index]
    })
}

const checkedAnswer=()=>{
    const ans = getAnswer()
    const data = question[index]
    if(ans===data.correct){
        right++
    }
    else{
        wrong++
    }
    index++
    QuizLoaders()
    return
}
const getAnswer =()=>{
     let answer = null
    optionbox.forEach((input)=>{
        if(input.checked){
           answer = input.value;
        }
    })
    return answer
}
submitButton.addEventListener('click', checkedAnswer)

const reset = ()=>{
    optionbox.forEach((input)=>{
        input.checked = false
    })
}
const quizEnd=()=>{
     document.getElementById('box').innerHTML =`
    <h3>Thank you for giving this quiz</h3>
    <h2>${right}/${total} is correct</h2>`
}
QuizLoaders()