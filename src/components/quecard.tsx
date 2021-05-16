import React, { useState } from 'react';

import {quePropsType} from './../types/quiz type'


const QueCard: React.FC <quePropsType> = ({question,option,callback}) => {
    
    let [trueAns , setTrueAns] = useState("");

    const chooseEvent = (ev: any) => {

        setTrueAns(ev.target.value);
    
    
    }
    
    return(
        <div className = 'Card'>
            <div className = 'question'>

                {question}

            </div>

            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e, trueAns)}
            className='card-submit'
            >
                {
                    option.map((opt:string , ind: number) => {

                        return(
                            <div key={ind}>
                            <label>
                                <input
                                 type="radio"
                                  name="opt"
                                  value={opt}
                                  className = 'gap'
                                  required
                                  checked={trueAns === opt}
                                  onChange={chooseEvent}
                                  />

                                {opt}
                            </label>
                           </div>
                        )

                    })
                }

                <input type="submit" className = 'Submit'/>

            </form>

        </div>
    )

}

export default QueCard;