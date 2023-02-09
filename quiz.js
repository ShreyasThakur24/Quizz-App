const quest = [
    {
        'ques': 'What is the capital of United Kingdom?',
        'a': 'Washington D.C.',
        'b': 'London',
        'c': 'Delhi',
        'd': 'Brazilia',
        'correct':'b'
    },
    {
        'ques': 'Which of the following is a country and not city',
        'a': 'Mumbai',
        'b': 'London',
        'c': 'New York',
        'd': 'England',
        'correct':'d'
    },
    {
        'ques': 'What does .js stand for?',
        'a': 'javastyle',
        'b': 'javascript',
        'c': 'javas',
        'd': 'All of the above',
        'correct':'b'
    },
    {
        'ques': 'What is 900 + 200',
        'a': '1200',
        'b': '1400',
        'c': '6200',
        'd': '1100',
        'correct':'d'
    },
    {
        'ques': 'Which is the only continent in the world without a forest',
        'a': 'Asia',
        'b': 'North America',
        'c': 'Europe',
        'd': 'Antarctica',
        'correct':'d'
    }

]
let index = 0;
let total = quest.length;
let right=0, wrong=0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = quest[index]
    console.log(data)
    quesBox.innerText = ` ${index + 1}) ${data.ques} `;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = quest[index];
    const ans = getAns()
    if (ans === data.correct){
        right ++;
    }else {
        wrong ++;
    }
    index ++;
    loadQuestion();
    return;
}

const getAns = () => {
    let ans;
     optionInputs.forEach(
        (input) => {
            if(input.checked){
                ans = input.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <h2 class= "final"> You've successfully played the Quiz</h3><br> <br>
    <h1 class= "final"> ${right} / ${total} are answered correctly !</h2>
    `
}



loadQuestion();