import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import EachCard from './EachCard';
import Footer from '../Footer/Footer';
import './MainComponent.css';

function MainComponent() {
    return (
        <>
        <Navbar/>
        <Banner />
        <div className="main">
            <h2 className="title">Trending Assesment Test</h2>
            <div className="assessment-cards">
                <EachCard head1={"FULL STACK"} head2={"MERN DEVELOPER"} img={""} color={"firstcard"} />
                <EachCard head1={"PRODUCT BASED"} head2={"COMPANY MOCK TEST"} img={""} color={"secondcard"} />
                <EachCard head1={"SERVICE BASED"} head2={"COMPANY MOCK TEST"} img={""} color={"thirdcard"} />
                <EachCard head1={"GENERAL AWARNESS"} head2={"2021"} img={""} color={"fourthcard"}/>

            </div>
        </div>
        <Footer />
        </>
    )
}

export default MainComponent
