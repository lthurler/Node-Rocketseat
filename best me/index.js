const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? e o que eu poderia fazer para melhorar?",    
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    return process.stdout.write("\n\n" + questions[index] + " > ")
}


ask()


const answers = []

process.stdin.on("data", data =>{
    answers.push(data.toString().trim())

    if (answers.length <  questions.length) {
        ask(answers.length)

    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Isso ai, Leandro!

    O que você aprendeu hoje foi: ${answers[0]}

    O que te aborreceu e o que poderia melhorar foi: ${answers[1]}

    O que te deixou feliz hoje foi: ${answers[2]}

    Vocêa ajudou ${answers[3]} pessoas hoje!

    Volte amanhã    
    
    `)
})
