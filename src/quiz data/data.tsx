import {quiz , questiontype} from "./../types/quiz type";

const shuffleArray = (array: any[]) => 
    [...array].sort(() => Math.random() - 0.5)

export const details = async (que: number, lvl: string): Promise<questiontype[]>  => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${que}&difficulty=${lvl}&type=multiple`)
    let {results} = await res.json();

const Quiz1:questiontype[]  = results.map((questionObj: quiz)=>{
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer,
            option: shuffleArray(questionObj.incorrect_answers.concat (questionObj.correct_answer))
        }
    })
return Quiz1;
}
