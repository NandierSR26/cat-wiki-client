import React from 'react'
import { setLevel } from '../helpers/setLevel'

export const Levels = ({ specs }) => {
    return (
        <div className="levels">
            {
                specs.map((spec, index) => {
                    return (
                        <div key={index} className="level">
                            <div 
                                className="progress"
                                style={{ width: setLevel(spec) }}
                            ></div>
                        </div>
                    )
                })
            }
        </div>
    )
}
