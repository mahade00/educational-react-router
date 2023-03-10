import React, { useEffect, useState } from 'react';
import AboutCompany from '../AboutCompany/AboutCompany';
import DataCount from '../DataCount/DataCount';
import ExploreCatagories from '../ExploreOurCatagories/ExploreCatagories';
import HeadBanner from '../HeadBanner/HeadBanner';
import HomeData from '../HomeData/HomeData';
import SubscribeUs from '../SubscribeUs/SubscribeUs';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import './Home.css'



const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
        .then(data=>setData(data))
    }, [])
    

    return (
        <div>
            <div>
                <HeadBanner></HeadBanner>
                <ExploreCatagories></ExploreCatagories>
                <AboutCompany></AboutCompany>
                <WhyChooseUs></WhyChooseUs>
            </div>
  <div>
            <h1 className="font-sans  font-semibold text-4xl text-[#2c2370]">Our Instructors</h1>
            <div className='instructors-data'>                        
                {
                    data.map(datas => <HomeData
                        key={datas.id}
                        name={datas.name}
                        subject={datas.subject}
                        img={datas.img}
                    rating={datas.rating}></HomeData>)
}
                </div>
                <DataCount></DataCount>
                <SubscribeUs></SubscribeUs>
            
        </div>
        </div>
      
    );
};

export default Home;