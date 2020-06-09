let questionParagraph = document.getElementById(`questionParagraph`)
let answer = document.getElementById(`answer`)
let submitButton = document.getElementById(`submitButton`)
let resultParagraph = document.getElementById(`resultParagraph`)
let nextButton = document.getElementById(`nextButton`)

let questionNumber = 1
let numCorrect = 0

submitButton.addEventListener(`click`, submit)
nextButton.addEventListener(`click`, next)

function submit() {
  let answerValue = answer.value.trim()

  if (questionNumber == 1) {
    if (answerValue == `getElementById`) {
      resultParagraph.innerHTML = `Correct.`
      numCorrect = numCorrect + 1
    }
    else {
      resultParagraph.innerHTML = `Incorrect. The answer is getElementById.`
    }
  }
  else if (questionNumber == 2) {
    if (answerValue == `addEventListener`) {
      resultParagraph.innerHTML = `Correct.`
      numCorrect = numCorrect + 1
    }
    else {
      resultParagraph.innerHTML = `Incorrect. The answer is addEventListener.`
    }
  }
  else if (questionNumber == 3) {
    if (answerValue == `innerHTML`) {
      resultParagraph.innerHTML = `Correct.`
      numCorrect = numCorrect + 1
    }
    else {
      resultParagraph.innerHTML = `Incorrect. The answer is innerHTML.`
    }
  }
  else if (questionNumber == 4) {
    if (answerValue == `value`) {
      resultParagraph.innerHTML = `Correct.`
      numCorrect = numCorrect + 1
    }
    else {
      resultParagraph.innerHTML = `Incorrect. The answer is value.`
    }
  }
  else if (questionNumber == 5) {
    if (answerValue == `style`) {
      resultParagraph.innerHTML = `Correct.`
      numCorrect = numCorrect + 1
    }
    else {
      resultParagraph.innerHTML = `Incorrect. The answer is style.`
    }

    nextButton.innerHTML = `See your score`
  }

  answer.disabled = true
  submitButton.disabled = true
  nextButton.style.display = `block`
}

function next() {
  questionNumber = questionNumber + 1

  if (questionNumber == 2) {
    questionParagraph.innerHTML = `In JavaScript, what is the method name for making an element listen for an event?`
  }
  else if (questionNumber == 3) {
    questionParagraph.innerHTML = `In JavaScript, what is the property name for setting the HTML inside of an element?`
  }
  else if (questionNumber == 4) {
    questionParagraph.innerHTML = `In JavaScript, what is the property name for getting what the user inputted?`
  }
  else if (questionNumber == 5) {
    questionParagraph.innerHTML = `In JavaScript, what is the property name for setting the CSS of an element?`
  }
  else if (questionNumber == 6) {
    let score = (numCorrect / 5) * 100
    questionParagraph.innerHTML = `You answered ${numCorrect} out of 5 questions correctly. Your score is ${score}%.`

    answer.style.display = `none`
    submitButton.style.display = `none`
  }

  answer.value = ``
  answer.disabled = false
  submitButton.disabled = false
  resultParagraph.innerHTML = ``
  nextButton.style.display = `none`
}