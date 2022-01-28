import React from 'react'
import './Card.css';
import profile from '../../assets/img/profile.svg';
import instagram from '../../assets/icon/instagram.svg';
import github from '../../assets/icon/Github.svg';
import fb from '../../assets/icon/facebook.svg';
import linkedin from '../../assets/icon/linkedin.svg';
import whatsapp from '../../assets/icon/whatsapp.svg';



const Card = () => {
    return (
        <div>
          <div className="card">
            <img src={profile} alt="" />
            <h2><marquee>MUH NURHAKIMIRROSYID Y</marquee> </h2>
        
            <h3>Front End Develover <br /> Mahasiswa STMIK SZ NW</h3>

            <a href="https://www.instagram.com/rosyid_65/" target="_blank" className='btn btn-1'>
                <div className='icon'>
                    <img src={instagram} alt="" />    
                </div>
                instagram
            </a>

            <a href="https://github.com/rosyidId" target="_blank" className='btn-2'>
                <div className='icon'>
                    <img src={github} alt="" />    
                </div>
                Github
            </a>

            <a href="https://www.facebook.com/lombokshoping.lombokshoping" target="_blank" className='btn-3'>
                <div className='icon'>
                    <img src={fb} alt="" />    
                </div>
                Facebook
            </a>

            <a href="https://www.linkedin.com/feed/" target="_blank" className='btn-4'>
                <div className='icon'>
                    <img src={linkedin} alt="" />    
                </div>
                linkedIn
            </a>

            <a href=" https://wa.me/6281918048978" target="_blank" className='btn-5'>
                <div className='icon'>
                    <img src={whatsapp} alt="" />    
                </div>
                WhatsApp
            </a>

          </div>  
        </div>
    )
}

export default Card;
