"use client";

import Surah from "@/components/Surah"
import axios from "axios"

import { useState } from "react"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


const MainPage = () => {

  const [surahs, setSurahs] = useState([])
  const [fetchLimit, setFetchLimit] = useState(0)

  const { ref, inView} = useInView();
  const FETCH_INCREMENT = 12;
    
    async function getSurahs(){
        try {
          const {data} = await axios.get("http://api.alquran.cloud/v1/quran/quran-uthmani")
          setSurahs(data.data.surahs.slice(0,fetchLimit+FETCH_INCREMENT));
          setFetchLimit((prev) => prev+FETCH_INCREMENT);
        } catch (err) {
          console.log(err)        
        }
    }

    useEffect(() => {
      getSurahs();
      if(inView){
          getSurahs();
        }

    }, [inView]);


  return (
    <section className="w-full h-full my-5 bg-slate-50">
      <div className="flex flex-col gap-2">
        {surahs.map((surah) => {
          return (
            <Surah surah={surah}/>
          )
        })}
      </div>
      <section className="flex items-center justify-center h-16" ref={ref}>
        <h2 className="text-lg"></h2>
      </section>
    </section>
  )
}

export default MainPage