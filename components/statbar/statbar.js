import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { StatBar, Circle } from './styles'


import personIcon from '../../public/personIcon.svg'
import globeIcon from'../../public/globeIcon.svg'
import graduate from'../../public/graduate.svg'
import calendar from'../../public/calendar.svg'

export default function Statbar() {
    const [browser, setBrowser] = useState(false)
    const [stats, setStats] = useState({members : 0, countries : 0, mentors : 0, events : 0, id : 1})

    

    useEffect(() => {
      setBrowser(true)
    }, [])

    const num = useRef(0)
    const interval= setInterval(() => {
        num.current += 1
    }, 1);
    setTimeout(() => {
        clearInterval(interval)
    }, 1);
    
    if(num > 99){ 
        clearInterval(interval) 
    }

    const country = useRef(0)
    const interval2 = setInterval(() => {
        country.current += 1
    }, 1);
    setTimeout(() => {
        clearInterval(interval2)
    }, 1);
    
    if(num > 29){ 
        clearInterval(interval2) 
    } 

   
    
    if(browser){   

        
        return(
            <>
                <Script>
                    {`
                        
                    //     var nodes = document.querySelectorAll(".trial");
                    
                    //     for (var i = 0; i < nodes.length; i++) {
                    //         var windowHeight = window.innerHeight;
                    //         var elementTop = nodes[i].getBoundingClientRect().top;

                    //         if (elementTop < (85/100)*windowHeight) {
                    //             nodes[i].classList.add("active");
                    //         }
                    //         else {
                    //             nodes[i].classList.remove("active");
                    //         }
                    //     }
                        

                    //     if(typeof window !== 'undefined'){
                    //         window.addEventListener("scroll", reveal);
                    //       }
                    // `}
                </Script>

                <StatBar className='flex justify-around place-items-center'>
                    
                    <Circle className='flex flex-col justify-around place-items-center'>
                        <Image src={personIcon} alt="person icon" />
                        <div className='text-center text-white tracking-wide font-bold'>
                            <p id='trial' className='trial'>{num.current}+</p>
                            <p>Members</p>
                        </div>
                    </Circle>

                    <Circle className='flex flex-col justify-around place-items-center'>
                        <Image src={globeIcon} alt="globe icon" />
                        <div className='text-center text-white tracking-wide font-bold'>
                            <p>{country.current}+</p>
                            <p>Countries</p>
                        </div>
                    </Circle>

                    <Circle className='flex flex-col justify-around place-items-center'>
                        <Image src={graduate} alt="graduation hat icon" />
                        <div className='text-center text-white tracking-wide font-bold'>
                            <p>10+</p>
                            <p>Mentors</p>
                        </div>
                    </Circle>

                    
                    <Circle className='flex flex-col justify-around place-items-center'>
                        <Image src={calendar} alt="calendar icon" />
                        <div className='text-center text-white tracking-wide font-bold'>
                            <p>5+</p>
                            <p>Events</p>
                        </div>
                    </Circle>
                    
                </StatBar>            
            </>
        )
    }
}