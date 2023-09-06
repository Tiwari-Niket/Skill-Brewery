'use client';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const data = [
    {
        id: 0,
        title: 'Home'
    },
    {
        id: 1,
        title: 'Skill Brewery'
    },
    {
        id: 2,
        title: 'Data Science Fasttrack'
    },
    {
        id: 3,
        title: 'Cybersecurity Evangelist'
    }
];

const Nav = () => {
    const [index, setIndex] = useState(1);
    return (

        <div className='mr-[50px] font-Ruwudu my-0.5 sticky top-0 z-50 nav w-full fixed flex'>
            <Image
                src='/assets/logo.png'
                alt='logo'
                width={90}
                height={90}
                className='object-contain ml-3 mr-20'
            />
            <div className='flex-between w-full'>
                {data.map((item) => {
                    return (
                        <Link href='/' key={item.id} className={`${index === item.id && 'active'} mr-20 text-xl font-bold color`}
                            onClick={() => setIndex(item.id)}>
                            {item.title}
                        </Link>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Nav