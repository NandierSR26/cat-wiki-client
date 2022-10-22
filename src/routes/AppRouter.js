import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BreedScreen } from '../pages/BreedScreen';
import { MainScreen } from '../pages/MainScreen';
import { TopCats } from '../pages/TopCats';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <MainScreen />
                }/>

                <Route path='/breed/:breedId' element={
                    <BreedScreen />
                }/>

                <Route
                    path='most-wanted/'
                    element={
                        <TopCats />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
