import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import axios from 'axios';
import {useState} from "react";
import {BsSearch} from "react-icons/bs";
import Weather from "@/components/Weather";
import Spinner from "@/components/Spinner";

const inter = Inter({subsets: ['latin']})
export default function Home() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
    const fetchWeather = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.get(url).then((response) => {
            setWeather(response.data);
        })
        setCity('');
        setLoading(false);
    }
    if(loading) {
        return  <Spinner />
    } else{
        return (
            <>
                <Head>
                    <title>Weather - Next App</title>
                    <meta name="description" content="Generated by create next app"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                {/* Overaly*/}
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]'/>
                {/* Background image */}
                <Image
                    src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"
                    alt="Picture of the author"
                    fill
                    className='object-cover'
                />
                {/* Search */}
                <div
                    className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
                    <form
                        onSubmit={fetchWeather}
                        className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'
                        action="">
                        <div>
                            <input
                                onChange={(e) => setCity(e.target.value)}
                                className='bg-transparent border-none text-white focus:outline-none text-2xl'
                                type="text"
                                placeholder='Seach city'/>
                        </div>
                        <button onClick={fetchWeather}>
                            <BsSearch size={22}/>
                        </button>
                    </form>
                </div>
                {/* Weather */}
                {weather.main && <Weather data={weather} />}
            </>
        )
    }
}
