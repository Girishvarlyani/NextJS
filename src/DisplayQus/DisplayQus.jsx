import React from 'react'
import questions from './Qus.json'
import { Button } from '@/Button'
import styles from './DisplayQus.module.css'

export const DisplayQus=()=> {
  return (
    <div>
        {questions.map(qus=>{
            return <div className={styles.buttons}><Button key={qus.id}questions={qus.question} id={qus.id}/></div>
        })}
    </div>
  )
}

