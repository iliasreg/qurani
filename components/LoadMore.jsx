"use client";

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const LoadMore = () => {

    const { ref, inView} = useInView();
    
    useEffect(() => {
        if(inView){
            alert("Load more");
        }
    }, [inView]);
    

  return (
    <section className="flex items-center justify-center h-16" ref={ref}>
        <h2 className="text-lg">Loading...</h2>
    </section>
    )
}

export default LoadMore