import React from "react";
import Image from 'next/image'

const Weather = ({data}) => {
    return (
        <div
            className='relative flex flex-col z-[2] justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-white'
        >
            <div  className='flex justify-between pt-12'>
                <div className='flex flex-col items-center'>
                    <Image
                        alt='/'
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        width={100}
                        height={100}
                    />
                    <p className='text-2xl'>{data.weather[0].description}</p>
                </div>
                <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
            </div>
            {/* Botton */}
            <div className='bg-black/50 p-8 rounded-md'>
                <p className='text-2xl text-center pb-6'>Clima em {data.name}</p>
                <div className='flex justify-between text-center'>
                    <div>
                        <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p className='text-xl'>Sensação térmica</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                        <p className='text-xl'>Humidade</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} km/h</p>
                        <p className='text-xl'>Vento</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather