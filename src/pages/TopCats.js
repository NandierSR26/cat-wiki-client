import React from 'react'
import { MostWantedItem } from '../components/MostWantedItem'

export const TopCats = () => {

    return (
        <>
            <h1>Top 10 most searched breeds</h1>

            <div className="top-list">
                <MostWantedItem />
            </div>
        </>
    )
}
