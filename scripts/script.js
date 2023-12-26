const questionsArray = [
    {
        ques: '1. Who is known as the "Master Blaster" in cricket?',
        options: ["Ricky Ponting", "Sachin Tendulkar", "Viv Richards", "AB de Villiers"],
        correctOption: "Sachin Tendulkar"
    },
    {
        ques: '2. Which country won the ICC Cricket World Cup in 2019?',
        options: ["Australia", "India", "New Zealand", "England"],
        correctOption: "England"
    },
    {
        ques: '3. Who holds the record for the highest individual score in Test cricket?',
        options: ["Brian Lara", "Sachin Tendulkar", "Don Bradman", "Sanath Jayasuriya"],
        correctOption: "Brian Lara"
    },
    {
        ques: '4. Which player has scored the fastest century in One Day Internationals (ODIs)?',
        options: ["Chris Gayle", "Virat Kohli", "AB de Villiers", "Brendon McCullum"],
        correctOption: "AB de Villiers"
    },
    {
        ques: '5. Who is the fastest batsman to reach the number one spot in the ICC ODI batting rankings?',
        options: ["MS Dhoni", "Joe Root", "Shubman Gill", "Hashim Amla"],
        correctOption: "MS Dhoni"
    }
]



const nextButton = document.querySelector(".next_button");
const currentQuestion = document.querySelector(".question");
const listItems = document.querySelectorAll(".option");
const List = document.querySelector(".option_list");
const result = document.querySelector(".result");
const quiz = document.querySelector(".quiz");



let count = 0 ;
let correctAnswers = 0 ;

nextButton.addEventListener("click", e=>{

    if(count<=4){
        currentQuestion.textContent = questionsArray[count].ques;
        List.classList.remove("disabled");
        
        for(let i=0; i < listItems.length; i++){
            listItems[i].textContent = questionsArray[count]["options"][i];
            listItems[i].classList.remove("correct_option", "wrong_option",);
        }

        if(count == 4){
            nextButton.textContent = "Results";
        }
        nextButton.style.display = "none";
    }
    else if(count == 5){
        result.textContent = "You have scored " + correctAnswers + " out of 5!";
        
        quiz.style.display = "none";
        result.style.display = "block";

        nextButton.textContent = "Play Again";
        count++;
    }
    else{
        location.reload();
    }
})



List.addEventListener("click", e=> {
    const selected = e.target;

    if(selected.tagName === 'LI'){

        if(selected.textContent === questionsArray[count]["correctOption"]){
            selected.classList.add("correct_option");
            correctAnswers++;
        }
        else{
            for(let i=0; i < listItems.length; i++){
                if(listItems[i].textContent === questionsArray[count]["correctOption"]){
                    listItems[i].classList.add("correct_option");
                    break;
                }
            }
            selected.classList.add("wrong_option");
        }

        nextButton.style.display = "block";
        count++;

        List.classList.add("disabled");
    }

})