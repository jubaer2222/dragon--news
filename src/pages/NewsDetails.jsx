import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news,setNews] =useState({});
    //  console.log(data, id,news);

    useEffect(()=>{
        const NewsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(NewsDetails);

    },[data,id])
     


    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-4'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>NewsDetails</h2>
                    <NewsDetailsCard news ={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;