"use client";

import { usePathname } from 'next/navigation'
import axios from "axios"
import { useState, useEffect } from 'react';

const SurahPage =  () => {

    const [surah, setSurah] = useState(null);
    const [reading, setReading] = useState(false);
    const [isLoading, setIsLoading] = useState(true);   //State for loading
    const path = usePathname();
    const id = path.split("/")[2];
  
    useEffect(() => {
      let isMounted = true; 
  
      async function getSurahs() {
        try {
          const { data } = await axios.get('http://api.alquran.cloud/v1/quran/quran-uthmani');
          const searchedSurah = data.data.surahs.find((s) => s.number.toString() === id.toString());
  
          if (isMounted) {
            setSurah(searchedSurah);
            setIsLoading(false);
          }

        } catch (error) {
          console.error(error);
          setIsLoading(false);
        }
      }
  
      getSurahs();
  
      return () => {
        isMounted = false; 
      };
    }, [id]); 
  

    if (isLoading) {
      return (<div className='w-full h-scree'>Loading...</div>)
    }


    const getArabRevelation = (revelation) => {
        return (revelation === "Medinan") ? "مدنية" : "مكية";
    }

    const onRead = () => {
        setReading((prev) => prev = !prev);
    }

    return (
    <>
        <section className='py-5 px-10 main-background'>
            <div className='flex flex-col w-full arabic-font gap-2'>
                <h3 className='h3-bold main-text'>{surah.name} - {surah.englishName}</h3>
                <h5 className='h5-bold text-gray-600'>الآيات - Ayahs <span> {surah.ayahs.length} </span></h5>
                <h5 className='h5-bold text-gray-600'>سُورَةُ {getArabRevelation(surah.revelationType)} - {surah.revelationType}</h5>
                <button className='cursor-pointer w-20 main-fill text-white p-bold-24 rounded-lg hover:bg-green-400' onClick={onRead}>إقرأ</button>
            </div>
        </section>

        {reading && (
            <section className='flex w-full justify-center items-center arabic-font'>
            <div className='w-full py-5 px-10'>
                <p className='px-1 p-bold-20 text-gray-700'>
                    {surah?.ayahs.map((ayah) => {
                        return (
                            <span >{ayah.text} <span className='main-text'> {`{${ayah.numberInSurah}}`} </span> </span>
                            )   
                        })}
                </p>
            </div>
            </section>
        )}

    </>
  )
}

export default SurahPage