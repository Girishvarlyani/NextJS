import React from 'react'
import questions from './Qus.json'
import { Button } from '@/Button'
import styles from './DisplayQus.module.css'

export const DisplayQus=()=> {
  return (
    <div>
        {questions.map((qus,index)=>{
            return <div key={qus.id} className={styles.buttons}><Button  questions={qus.question} id={qus.id}/></div>
        })}
    </div>
  )
}

