import React from 'react'

export const Catphoto = ({ photos }) => {
    return (
        <>
            {
                photos.map( (photo, i) => (
                    <div className="photo" key={i}>
                        <img src={ photo } alt="imagen" />
                    </div>
                ))
            }
        </>
    )
}
