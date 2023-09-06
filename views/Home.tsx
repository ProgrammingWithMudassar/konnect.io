"use client"
import ExploreTechnologies from '@/components/LandingPage/ExploreTechnologies'
import Hero from '@/components/LandingPage/Hero'
import SellProducts from '@/components/LandingPage/SellProducts'
import Team from '@/components/LandingPage/Team'
import React, { Fragment } from 'react'

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <ExploreTechnologies />
            <Team />
            <SellProducts />
        </Fragment>
    )
}

export default Home;