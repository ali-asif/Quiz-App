import React from 'react'

export type quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type questiontype = {
    question: string
    answer: string
    correct_answer: string
    option: string[]

}
export type quePropsType = {
    question: string
    option: string[]
    callback: (e:React.FormEvent<EventTarget>, ans: string)=>void

}