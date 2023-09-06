import Image from 'next/image'
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin, BsFacebook, BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='coursel'>
            <Image
                src='/assets/Footer.png'
                width={1600}
                height={0}
                className=''
            />
            <div className='absolute top-[15%] left-[5%] w-full pr-36'>
                <div className='flex-between'>
                    <div>
                        <h1 className='text-3xl font-bold red mb-4 font-Lora'>Get In Touch</h1>
                        <h3 className='red text-lg font-Raleway font-medium mb-3'>Nyati Estate Road,Pune-60,<br/>Maharashtra,<br/>Indiastudentconnect@codevita.live</h3>
                        <p className='color font-Raleway'>© Codevita Live, All rights reserved.</p>
                    </div>
                    <div className='color'>
                        <h3 className='text-lg font-Raleway font-medium mb-3'>Skill Brewery</h3>
                        <h3 className='text-lg font-Raleway font-medium mb-3'>Home</h3>
                        <h3 className='text-lg font-Raleway font-medium mb-3'>Data Science Fasttrack</h3>
                        <h3 className='text-lg font-Raleway font-medium mb-3'>Cybersecurity Evangelist</h3>
                        <h3 className='text-lg font-Raleway font-medium mb-3'>Terms & Conditions</h3>
                    </div>
                    <div>
                        <h1 className='text-3xl red font-bold mb-5 font-Lora'>Follow Us On:</h1>
                        <div className='flex-between color mb-10'>
                            <div><BsYoutube size={35}/></div>
                            <div><BsLinkedin size={30}/></div>
                            <div><BsFacebook size={35}/></div>
                            <div><AiFillInstagram size={35}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer