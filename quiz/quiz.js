const questionBank = [
     {
          question: "Who created this website?",
          answers: [
               {text: "John Cena", correct: false},
               {text: "Your Mother", correct: false},
               {text: "Ore Ajibade", correct: true},
               {text: "Queen Elizabeth II (RIP)", correct: false}
          ]
     },
     {
          question: "Which is better?",
          answers: [
               {text: "Apple Juice", correct: false},
               {text: "Orange Juice", correct: true}
          ]
     },
     {
          question: "Who is the G.O.A.T.?",
          answers: [
               {text: "Kevin Hart", correct: false},
               {text: "You", correct: false},
               {text: "Lionel Messi", correct: false},
               {text: "Ore Ajibade", correct: true}
          ]
     },
     {
          question: "What does CPU stand for?",
          answers: [
               { text: "Central Processing Unit", correct: true },
               { text: "Computer Personal Unit", correct: false },
               { text: "Central Process Unit", correct: false },
               { text: "Control Processing Unit", correct: false },
          ],
     },
     {
          question: "Which component of the CPU is often referred to as the 'brain' of the computer?",
          answers: [
               { text: "Control Unit", correct: false },
               { text: "Arithmetic-Logic Unit", correct: false },
               { text: "Central Processor", correct: false },
               { text: "Central Processing Unit", correct: true },
          ],
     },
     {
          question: "What is the primary function of the Control Unit (CU) in a CPU?",
          answers: [
               { text: "Perform arithmetic calculations", correct: false },
               { text: "Manage and control input and output operations", correct: true },
               { text: "Coordinate memory storage", correct: false },
               { text: "Handle data transmission between CPUs", correct: false },
          ],
     },
     {
          question: "What is the primary function of the Arithmetic-Logic Unit (ALU) in a CPU?",
          answers: [
               { text: "Input and output operations", correct: false },
               { text: "Arithmetic and bitwise operations on binary numbers", correct: true },
               { text: "Control signal operations", correct: false },
               { text: "Logical operations", correct: false },
          ],
     },
     {
          question: "What is the purpose of the Data Bus in a CPU?",
          answers: [
               { text: "To carry control signals between the CPU and other devices", correct: false },
               { text: "To pass the address of the location in cache or main memory", correct: false },
               { text: "To transfer data to/from the address held on the address bus", correct: true },
               { text: "To perform logical operations on data", correct: false },
          ],
     },
     {
          question: "What determines the width of the data bus in a CPU?",
          answers: [
               { text: "The speed of the CPU", correct: false },
               { text: "The type of RAM used", correct: false },
               { text: "The width of the data registers", correct: false },
               { text: "The word size, describing the width of the data bus", correct: true },
          ],
     },
     {
          question: "In the context of CPU design, what does ALU stand for?",
          answers: [
               { text: "Arithmetic Language Unit", correct: false },
               { text: "Advanced Logic Unit", correct: false },
               { text: "Arithmetic-Logic Unit", correct: true },
               { text: "Application Logic Unit", correct: false },
          ],
     },
     {
          question: "Which component in a CPU temporarily holds the data fetched from memory?",
          answers: [
               { text: "Program Counter (PC)", correct: false },
               { text: "Memory Address Register (MAR)", correct: false },
               { text: "Current Instruction Register (CIR)", correct: false },
               { text: "Memory Data Register (MDR)", correct: true },
          ],
     },
     {
          question: "What is the purpose of the Address Bus in a CPU?",
          answers: [
               { text: "To transmit control signals between the CPU and other devices", correct: false },
               { text: "To pass the address of the location in cache or main memory", correct: true },
               { text: "To carry data to/from the address held on the address bus", correct: false },
               { text: "To perform arithmetic operations on data", correct: false },
          ],
     },
     {
          question: "In a CPU, which component monitors communications between the hardware attached to the computer?",
          answers: [
               { text: "Arithmetic-Logic Unit (ALU)", correct: false },
               { text: "Cumtrol Unit (CU)", correct: false },
               { text: "Program Counter (PC)", correct: false },
               { text: "Control Unit (CU)", correct: true },
          ],
     },
     {
          question: "Which type of bus is used to transmit control signals between the CPU and other devices within a computer?",
          answers: [
               { text: "Control Bus", correct: true },
               { text: "Address Bus", correct: false },
               { text: "Data Bus", correct: false },
               { text: "Memory Bus", correct: false }
          ]
     },
     {
          question: "Which component in a CPU holds the address of the current instruction?",
          answers: [
               { text: "Program Counter (PC)", correct: false },
               { text: "Memory Address Register (MAR)", correct: true },
               { text: "Current Instruction Register (CIR)", correct: false },
               { text: "Memory Data Register (MDR)", correct: false },
          ],
     },
     {
          question: "In the Fetch-Execute Cycle, what is the purpose of incrementing the Program Counter (PC)?",
          answers: [
               { text: "To perform logical operations", correct: false },
               { text: "To decode the current instruction", correct: false },
               { text: "To fetch instructions from main memory", correct: false },
               { text: "To prepare for the next instruction fetch", correct: true },
          ],
     },
     {
          question: "Which bus in a CPU is used to carry data between the microprocessor and the main memory?",
          answers: [
               { text: "Control Bus", correct: false },
               { text: "Data Bus", correct: true },
               { text: "Address Bus", correct: false },
               { text: "I/O Bus", correct: false },
          ],
     },
     {
          question: "What type of operations are performed by the Arithmetic-Logic Unit (ALU) in a CPU?",
          answers: [
               { text: "Input and output operations", correct: false },
               { text: "Arithmetic and logical operations", correct: true },
               { text: "Control signal operations", correct: false },
               { text: "Storage operations", correct: false },
          ],
     },
     {
          question: "What is the purpose of the Memory Data Register (MDR) in a CPU?",
          answers: [
               { text: "To hold the address of the next instruction", correct: false },
               { text: "To store the results of calculations", correct: true },
               { text: "To decode instructions", correct: false },
               { text: "To increment the Program Counter (PC)", correct: false },
          ],
     },
     {
          question: "In the Fetch-Execute Cycle, what is the final step after decoding the current instruction?",
          answers: [
               { text: "Fetching instructions from main memory", correct: false },
               { text: "Performing logical operations", correct: false },
               { text: "Fetching additional data from memory", correct: true },
               { text: "Executing the current instruction", correct: false },
          ],
     },
     {
          question: "What does RAM stand for?",
          answers: [
               { text: "Random Access Memory", correct: true },
               { text: "Read-Only Memory", correct: false },
               { text: "Random Allocation Memory", correct: false },
               { text: "Redundant Array of Memory", correct: false },
          ],
     },
     {
          question: "Which component in a computer stores data and programs for long-term use, even when the computer is powered off?",
          answers: [
               { text: "RAM (Random Access Memory)", correct: false },
               { text: "CPU (Central Processing Unit)", correct: false },
               { text: "Hard Drive (HDD or SSD)", correct: true },
               { text: "Motherboard", correct: false },
          ],
     },
     {
          question: "What is the purpose of the BIOS (Basic Input/Output System) in a computer?",
          answers: [
               { text: "To display graphics on the monitor", correct: false },
               { text: "To execute application software", correct: false },
               { text: "To control input and output devices", correct: false },
               { text: "To initiate hardware initialization and startup processes", correct: true },
          ],
     },
     {
          question: "What does SSD stand for in the context of computer storage?",
          answers: [
               { text: "Solid State Drive", correct: true },
               { text: "Super Speedy Disk", correct: false },
               { text: "Software Storage Device", correct: false },
               { text: "System Security Disk", correct: false },
          ],
     },
     {
          question: "Which computer component is responsible for rendering images and graphics on the monitor?",
          answers: [
               { text: "CPU (Central Processing Unit)", correct: false },
               { text: "RAM (Random Access Memory)", correct: false },
               { text: "GPU (Graphics Processing Unit)", correct: true },
               { text: "Hard Drive (HDD or SSD)", correct: false },
          ],
     },
     {
          question: "What is the function of the CMOS battery in a computer?",
          answers: [
               { text: "To provide backup power during power outages", correct: false },
               { text: "To regulate the computer's temperature", correct: false },
               { text: "To store BIOS settings and maintain the system clock", correct: true },
               { text: "To control the speed of the CPU", correct: false },
          ],
     },
     {
          question: "What is the role of the operating system in a computer?",
          answers: [
               { text: "To store user data and files", correct: false },
               { text: "To execute application software", correct: false },
               { text: "To provide an interface for user interaction and manage hardware resources", correct: true },
               { text: "To maintain system security and protect against viruses", correct: false },
          ],
     },
]

const failComments = [
     "💀",
     "Bruh", 
     "Consider dropping out",
     "Did you even read the questions 💀",
     "Try again",
     "Poor",
     "What would your mother say?",
     ":(",
     "This is just sad"
]

const passComments = [
     "Nicee",
     "Didn't know bro was this smart",
     "Keep it up fam",
     "Good work bro",
     "You're that guy",
     "👌",
     "Good Job",
     "🎉🎊",
     "Did you cheat?"
]

function getQuestions(){
     const questions = []
     for(i = 0; 10 > i; i++){
          const index = Math.floor(Math.random() * questionBank.length);
          questions.push(questionBank[index])
     }

     return questions;
}

const questionElement = document.getElementById("question");
const questionNumber = document.getElementById("questNo");
const buttonWrapper = document.getElementById("btn-wrapper");
const nextBtn = document.getElementById("nxt");

const wrapper = document.getElementById("home-main");
const scoreBoard = document.getElementById("score");
const scoreWrapper = document.getElementById("score-board");
const commentPlatform = document.getElementById("comment");
const quizBtn = document.getElementById("toQuiz");
const indicators = document.getElementsByClassName("indicator")

const questions = getQuestions();
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
     currentQuestionIndex = 0;
     score = 0;
     showQuestion();
}

function showQuestion() {
     resetState();
     let currentQuestion = questions[currentQuestionIndex];
     let questionNo = currentQuestionIndex+1;
     
     questionElement.innerHTML = currentQuestion.question;
     questionNumber.innerHTML = questionNo;

     currentQuestion.answers.forEach(answer => {
          const button = document.createElement("button");
          button.innerHTML = answer.text;
          buttonWrapper.appendChild(button);
          button.setAttribute("correct", answer.correct)
          button.addEventListener("click", selectAnswer);
     });
}

function resetState(){
     nextBtn.style.display = "none";
     buttonWrapper.innerHTML = "";
}

function selectAnswer(e){
     selectedBtn = e.target;
     const isCorrect = selectedBtn.getAttribute("correct");

     if(isCorrect == "true"){
          selectedBtn.classList.add("correct");
          score++;
     }else{
          selectedBtn.classList.add("wrong");
     }

     Array.from(buttonWrapper.children).forEach( btn => {
          const btnCor = btn.getAttribute("correct");
          if(btnCor == "true"){
               btn.classList.add("correct");
          }
          btn.disabled = true;
     });

     nextBtn.style.display = "block";
}

function uploadData(){
     localStorage.setItem("tested", true);
     localStorage.setItem("score", score);
}

function displayScore() {
     score = localStorage.getItem("score");
     scoreBoard.innerHTML = score;

     if(score >= 5){
          const passIndex = Math.floor(Math.random() * passComments.length);
          commentPlatform.innerHTML = `"${passComments[passIndex]}"`;
          scoreWrapper.classList.add("pass");
          commentPlatform.classList.add("pass");
     }else{
          const failIndex = Math.floor(Math.random() * failComments.length);
          console.log(failIndex)
          commentPlatform.innerHTML = `"${failComments[failIndex]}"`;
          scoreWrapper.classList.add("fail");
          commentPlatform.classList.add("fail");
     }

     quizBtn.innerText = "Try Again";
     wrapper.style.opacity = "1";
}

function loadHome(){
     if(localStorage.getItem("tested")){
          displayScore();
     }
}

function back(){
     localStorage.clear();
     location = '../index.html';
}

function handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex < questions.length){
          showQuestion();
     }else{
          uploadData();
          location = "./home.html";
     }
}

if(nextBtn){
     nextBtn.addEventListener("click", () => {
          if(currentQuestionIndex < questions.length){
               handleNextButton();
          }else{
               uploadData();
               location = "./home.html";
          }
     });
}