import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Card } from '../components/Card';
import { useForm } from '../hooks/useForm';

export const MainScreen = () => {

    const possibleOutcomes = document.querySelector('.possible-outcomes');
    const input = document.querySelector('#breed');

    const navigate = useNavigate();
    const [name, setName] = useState([]);
    const [values, handleInputChange] = useForm({
        breed: '',
    })

    let { breed } = values;


    const getPosibleOutcomes = async () => {
        const resp = await fetch(`https://cat-wiki-api-nr.herokuapp.com/get-breeds/${breed}`);
        const data = await resp.json();

        setName(data)
    }

    const handleSetInputValue = (cat) => {
        breed = cat
        input.value = cat;
        possibleOutcomes.classList.add('none');
    }

    const handleShowPossibleOutcomes = () => {
        if (name.length > 0) {
            possibleOutcomes.classList.remove('none')
        } else {
            possibleOutcomes.classList.add('none')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const resp = await fetch(`https://cat-wiki-api-nr.herokuapp.com/breeds/search/?q=${breed}`);
            const { cat } = await resp.json();

            localStorage.setItem('cat', JSON.stringify(cat));
            navigate('/breed');
        } catch (error) {
            Swal.fire('Error', 'ingresa una de las razas sugeridas', 'error');
        }
        // if( !localStorage.getItem('cat') ){
        // }
    }

    useEffect(() => {
        let isMounted = true

        if (isMounted) {
            if (breed.length > 0) {
                getPosibleOutcomes();
            } else {
                setName([])
            }
        }

        return () => {
            isMounted = false;
        }
    }, [breed]);


    return (
        <>
            <section className="banner">
                <div className="search-section">
                    <div className="banner-texts">
                        <p className="search-section-title">catwiki</p>
                        <p>Get to know more about your cat breed</p>
                    </div>
                    <form
                        className="box-input"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="breed"
                            id='breed'
                            placeholder="Search for a cat breed"
                            autoComplete='off'
                            onSelect={handleShowPossibleOutcomes}
                            onChange={handleInputChange}
                        />
                        <i
                            className="fa-solid fa-magnifying-glass pointer"
                            onClick={handleSubmit}
                        ></i>

                        <div className="possible-outcomes none" >
                            <ul>
                                {
                                    name.map((catName, i) => (
                                        <li
                                            key={i}
                                            onClick={() => handleSetInputValue(catName)}
                                        >
                                            {catName}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </form>
                </div>
                <div className="most-wanted-section">
                    <div>
                        <p className="most-wanted-section-text-1">Most Searched Breeds</p>

                        <div>
                            <p className="most-wanted-section-text-2">66+ Breeds For you to discover</p>
                            <Link
                                to="/most-wanted"
                                className="see-more-1"
                            >
                                See more <span><i className="fa-solid fa-arrow-right"></i></span>
                            </Link>
                        </div>
                    </div>

                    <div className="container-cards">
                        <Card />
                    </div>
                </div>
            </section>

            <section className="motivation">
                <div className="motivation-texts">
                    <h1>Why should you have a cat?</h1>
                    <p>Having a cat around you can actually trigger the release of calming chemicals in your body which
                        lower your stress and anxiety leves</p>

                    <a href="#" className="see-more">Read more <span><i className="fa-solid fa-arrow-right"></i></span></a>
                </div>

                <div className="grid-images">
                    <div className="column-1">
                        <div className="image-2">
                            <img src="assets/img/image 2.png" alt="" />
                        </div>
                        <div className="image-1">
                            <img src="assets/img/image 1.png" alt="" />
                        </div>
                    </div>

                    <div className="image-3">
                        <img src="assets/img/image 3.png" alt="" />
                    </div>

                </div>
            </section>
        </>
    )
}
