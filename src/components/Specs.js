import React from 'react'

export const Specs = () => {
    const specsNames = ['adaptability:', 'affection_level:', 'child_friendly:', 'grooming:', 'intelligence:', 'health_issues:', 'social_needs:', 'stranger_friendly:']
    return (
        <div className="specs">
            {
                specsNames.map((spec, index) => (
                    <p key={index}><b>{spec}</b></p>
                ))
            }
        </div>
    )
}
