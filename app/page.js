'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiRotaryPhone } from 'react-icons/gi';
import { BsDot } from 'react-icons/bs';

import Footer from '@components/Footer';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

// required modules
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import { useState } from 'react';

const Home = () => {
  const [detail, setDetail] = useState({ email: "", college: "", name: "", current_semester: "", domain: "", otp: "" });
  const [OTP, setOTP] = useState(null);
  const [otpError, setOtpError] = useState(false);

  const fetchDetail = async () => {
    const response = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify({
        email: detail.email,
      })
    });
    const data = await response.json();
    setOTP(data);
  };

  const updateUser = async (e) => {
    console.log(OTP.otp);
    if (OTP.otp === detail.otp) {
      try {
        const response = await fetch(`/api/detail`, {
          method: 'PATCH',
          body: JSON.stringify({
            email: detail.email,
            college: detail.college,
            name: detail.name,
            current_semester: detail.current_semester,
            domain: detail.domain,
            otp: detail.otp
          })
        });
        if (response.ok) {
          setOtpError(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      e.preventDefault();
    }
  };

  const newUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
          email: detail.email,
        })
      });

      if (response.ok) {
        fetchDetail();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e, field) => {
    setDetail({ ...detail, [field]: e.target.value });
  };

  const swiperStyles = {
    nextButton: {
      color: '#FFFFFF', // Change this to your desired color
    },
    prevButton: {
      color: '#FFFFFF', // Change this to your desired color
    }
  };

  const handleSubmit = async () => {
    console.log(OTP, detail.otp);
    if (OTP.otp !== detail.otp) {
      setOtpError(true);
    }
    console.log(otpError);
  };

  return (
    <div>
      <section>
        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className='h-[400px]'
        >
          <SwiperSlide className='coursel'>
            <Image
              src='/assets/slider.png'
              alt='logo'
              width={1500}
              height={456}
              className='object-contain'
            />
            <h1 className='coursel-title font-black text-7xl font-Raleway'>Welcome to <br /> Skill-Brewery <br /> Internship </h1>
            <h3 className='coursel-text font-black text-3xl font-Kalam'>Where Code Meets Nostalgia</h3>
            <div className="swiper-button-next" style={swiperStyles.nextButton}></div>
          </SwiperSlide>
          <SwiperSlide className='coursel'>
            <div className="swiper-button-prev" style={swiperStyles.prevButton}></div>
            <Image
              src='/assets/slider.png'
              alt='logo'
              width={1500}
              height={456}
              className='object-contain'
            />
            <p className='coursel-desc font-Kalam font-black text-2xl'>Remember the days of pixelated screens and floppy disks? <br /> <br /> At Skill Brewery, we do too! <br /> We're not just any internship program; we're your time machine to the future of coding, wrapped in a vintage shell.</p>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className='ml-5 flex'>
        <div className='mt-3'>
          <h3 className='text-3xl mb-5 mt-3 font-Kalam font-black title'>Skill Brewery: Virtual Internship Program</h3>
          <p className='mr-10 text-xl w-[90%] text-justify font-Lora'>Get ready to warp into the next level of your career with hands-on projects that will teleport your skills to the future! When you successfully complete the program, you'll earn a prestigious internship certificate, gain invaluable work experience, and receive personalized mentoring. Select from a variety of domains and supercharge your resume to shine brighter than a pixelated power-up!</p>
        </div>
        <div className='mr-10 mb-10'>
          <Image
            src='/assets/Quote.png'
            width={1600}
            height={1000}
            className='Obtain-fit'
          />
        </div>
      </section>
      <section className='ml-5 mb-1'>
        <h1 className='text-3xl title font-black mb-3 font-Kalam'>Why Choose Skill Brewery?</h1>
        <div className='flex mb-2'>
          <GiRotaryPhone size={50} className='mr-8' />
          <p className='font-Lora text-xl'><span className='font-bold'>LinkedIn Profile Crafting:</span> Your resume is your character sheet in the professional world. We'll help you power up your LinkedIn profile, making it shine like the high-score screen of a classic arcade game.</p>
        </div>
        <div className='flex mb-2'>
          <GiRotaryPhone size={38} className='mr-8' />
          <p className='font-Lora text-xl'><span className='font-bold'>Capstone Project Intensive:</span> Prepare for the ultimate showdown! Dive into our capstone project, an epic adventure that pushes your coding skills to their limits.</p>
        </div>
        <div className='flex mb-2'>
          <GiRotaryPhone size={38} className='mr-8' />
          <p className='font-Lora text-xl'><span className='font-bold'>Free of Cost:</span> No need to insert coins here! Skill-Brewery is free, making it accessible to every aspiring coder looking to unlock their potential.</p>
        </div>
        <div className='flex mb-2'>
          <GiRotaryPhone size={50} className='mr-8' />
          <p className='font-Lora text-xl'><span className='font-bold'>24/7 Support Hotline:</span> No need to insert a coin to get help! Our round-the-clock support is your lifeline when you're stuck on a tricky code level. We're here to help you conquer the digital realm, anytime, anywhere.</p>
        </div>
        <div className='flex mb-2'>
          <GiRotaryPhone size={40} className='mr-8' />
          <p className='font-Lora text-xl'><span className='font-bold'>Internship Completion Certificate:</span> Unlock a rare achievement in your coding journey! Receive a certificate that proves your mastery of the Skill-Brewery coding universe.</p>
        </div>
      </section>
      <section className='ml-5 flex-between'>
        <div>
          <h1 className='text-3xl mt-5 title font-black mb-3 font-Kalam'>Ready to Power-Up Your Coding Journey?</h1>
          <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdf17YI0sj5Eu1zHnbAKvOkJzO4hd4bWuU-AiAHZFwRou32Gw/viewform' className='title text-xl font-bold mb-2 font-Raleway'>Fill the Verification Form: Link</Link>
          <p className='text-lg w-[80%] text-justify font-Raleway'>Complete the form below after filling out the verification form above. You'll receive a verification code after submitting the Google Form. New cohorts launch every month on the 15th!</p>
          <form onSubmit={updateUser} className='mt-5 mb-5'>
            <div className='mb-7'>
              <label className='red font-Ruwudu mr-40 text-xl font-bold'>Email:</label>
              <input className='rounded-full py-3 p-2 w-[350px]' onChange={(e) => handleInputChange(e, 'email')} required />
              <button className='red ml-16 coursel' onClick={newUser}>
                <Image
                  src='/assets/button.png'
                  width={150}
                  height={100}
                  className='obtain-fit'
                />
                <p className='absolute font-Ruwudu font-bold text-xl top-[25%] right-[32%]'>Verify</p>
              </button>
            </div>
            <div className='mb-7'>
              <label className='red font-Ruwudu mr-40 text-xl font-bold'>Name:</label>
              <input className='rounded-full py-3 p-2 w-[350px]' onChange={(e) => handleInputChange(e, 'name')} required />
            </div>
            <div className='mb-7'>
              <label className='red font-Ruwudu text-xl font-bold mr-16'>Degree + College:</label>
              <input className='rounded-full py-3 ml-1 p-2 w-[350px]' onChange={(e) => handleInputChange(e, 'college')} required />
            </div>
            <div className='mb-7'>
              <label className='red font-Ruwudu text-xl font-bold mr-14'>Current Semester:</label>
              <input className='rounded-full py-3 p-2 w-[350px]' onChange={(e) => handleInputChange(e, 'current_semester')} required />
            </div>
            <div className='mb-7'>
              <label className='red font-Ruwudu text-xl font-bold mr-32'>Domain:</label>
              <input className='rounded-full py-3 ml-2 p-2 w-[350px]' onChange={(e) => handleInputChange(e, 'domain')} required />
            </div>
            <div className='mb-7'>
              {otpError && <p className='red text-center mt-2 mr-60 font-Ruwudu text-lg'>Wrong Otp!</p>}
              <label className='red font-Ruwudu text-xl font-bold mr-14'>Verification Code:</label>
              <input className='rounded-full py-3 p-2 w-[350px]' onChange={(e) => handleInputChange(e, 'otp')} required />
            </div>
            <button onClick={handleSubmit} className='red ml-40 mt-2 coursel'>
              <Image
                src='/assets/button.png'
                width={150}
                height={100}
                className='obtain-fit'
              />
              <p className='absolute font-Ruwudu font-bold text-xl top-[25%] right-[30%]'>Submit</p>
            </button>
          </form>

        </div>
        <div className='coursel'>
          <Image
            src='/assets/Topic.png'
            width={500}
            height={500}
            className='object-contain mr-20'
          />
          <h1 className='domain text-3xl font-Raleway font-black'>DOMAIN</h1>
          <h3 className='absolute text-xl font-bold color flex-center top-[31%] right-[26%]'><BsDot /> Web Development</h3>
          <h3 className='absolute text-xl font-bold color flex-center top-[37%] right-[22%]'><BsDot /> Product Management</h3>
          <h3 className='absolute text-xl font-bold color flex-center top-[43%] right-[34%]'><BsDot /> Data Science</h3>
          <h3 className='absolute text-xl font-bold color flex-center top-[49%] right-[30%]'><BsDot /> Computer Vision</h3>
          <h3 className='absolute text-xl font-bold color flex-center top-[55%] right-[26%]'><BsDot /> Web Development</h3>
          <h3 className='absolute text-xl font-bold color flex-center top-[61%] right-[21%]'><BsDot /> Product Management</h3>
        </div>
      </section>
      <section className='ml-5 mb-32'>
        <h1 className='text-3xl mb-6 title font-bold font-Kalam'>Travel Back in Time: Hear from Our Retro Interns</h1>
        <p className='text-xl w-[55%] pr-3 mb-10 font-Raleway font-medium'>Curious to see what our ex-interns have to say about their unforgettable journeys at Skill Brewery? Dive into the past and listen to their tales of triumph and adventure!</p>
        <p className='text-xl font-Raleway'><span className='font-bold'>LinkedIn Testimonials:</span> (LinkedIn Link)</p>
        <p className='text-xl font-Raleway'><span className='font-bold'>YouTube Stories:</span> (YouTube Link)</p>
        <div className='mt-7 flex-center coursel'>
          <Image
            src='/assets/tv.png'
            width={500}
            height={500}
            className='contain-fit'
          />
          <div className="video-desc-holder absolute top-[10%] right-[41.85%]">
            <div className="editable-video-holder" data-block-id="7779438611" data-video-id="video_7779438611_1688629928474_0">
              <div className="video-player-holder" data-src="https://www.youtube.com/embed/_7iWj3C8QSA?enablejsapi=1" data-youtubeurl="" data-poster="https://i.ytimg.com/vi/_7iWj3C8QSA/hqdefault.jpg" data-video-uploaded="false" data-video-type="youtube" style={{ background: 'none', height: '100%' }}>
                <iframe className='border-radius' width="330" height="280" src="https://www.youtube.com/embed/J09qee7fYfk?si=-aF5VrQt1vF21h6P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="tint-div"></div>
              </div>
            </div>
          </div>
        </div>
        <p className='text-xl font-Ruwudu text-center font-bold color mt-2'>Watch the YT videos here</p>
      </section>
      <Footer />
    </div>
  )
}

export default Home
