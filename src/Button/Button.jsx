"use client"
import React, { useState } from 'react'
import styles from './Button.module.css'
import Image from 'next/image'

export const Button=(props)=> {
    const [isMasked, setIsMasked] = useState(true)
    const [modal, setModal] = useState(false)

    const handleMask=()=>{
        
        setIsMasked(false)
    }
    const handleShowQus=(prop)=>{
        console.log(props)
        setModal(true)
    }
    const handleImageClick=(e)=>{
        //alert("Hi Image Clicked")
        e.stopPropagation();
        handleShowQus(props.questions)
        
    }

    const fnClose=()=>{
        setModal(false)
    }   
    
  return (
   
              <div className={styles.btnDiv} onClick={handleMask}>
             {props.id}
            {/* {props.questions} */}
            <Image  src="/eye.png" width={25} height={20} onClick={handleImageClick} />
        
           {isMasked && <div className={styles.mask}></div>
        }

           { modal && <div>
            <div className={styles.mask1}></div>
            <div className={`px-3 py-3 ${styles.modalContent}`}>
                <h5 className="mb-5">{props?.questions}</h5>
                <div className="text-end">
                    <button className="btn btn-dark" onClick={fnClose} >
                        CLOSE
                    </button>
                </div>
            </div>
            </div>}
        
        </div>
        
  )
}
