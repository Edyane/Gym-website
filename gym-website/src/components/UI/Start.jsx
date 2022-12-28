import React from "react";
import '../../styles/Start.css';
import trainerImg from '../../assets/img/trainer.png'

const Start = () => {
    return <section>
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={trainerImg} alt="" />
                </div>

                <div className="start__content">
                    <h2 className="section__title">
                        Ready to make a <span className="highlights">change?</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolor odio
                        corrupti a officia quisquam aliquam! Quod tempore corrupti veniam quis error,
                        reprehenderit illo quia voluptatum, ut assumenda ipsam autem!
                    </p>

                    <button className="register__btn">Get Started</button>
                </div>
            </div>
        </div>
    </section>
}

export default Start