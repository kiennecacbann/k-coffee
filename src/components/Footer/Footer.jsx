import React from 'react'
import { AiFillPhone } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
const Footer = () => {
    return ( 
        <div className='bg-[#262626] text-white py-5 px-[150px]'>
            <div className='flex justify-between border-b-[1px] border-white border-solid pb-5 '>
                <div className='flex flex-col items-start space-y-3'>
                    <h2>Introduce</h2>
                    <a>About Us</a>
                    <a>Products</a>
                    <a>Sales</a>
                    <a>Our Stories</a>
                    <a>Stores</a>
                    <a>Career</a>
                </div>
                <div className='flex flex-col items-start space-y-3'>
                    <h2>Terms</h2>
                    <a>Help Center</a>
                    <a>Private Policy</a>
                </div>
                <div className='flex flex-col items-start space-y-3'>
                    <h2 className='flex items-center'><AiFillPhone className='mr-1' />Delivery: 1800 6936</h2>
                    <a className='flex items-center'><BiMap className='mr-1' />Address</a>
                    <a>352 Binh Quoi, F28, Binh Thanh dist, HCMC</a>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.125838621683!2d106.71145027472485!3d10.80167288934861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f20de4c9adf%3A0x59ed55baa1622c69!2zVGhlIENvZmZlZSBIb3VzZSDEkGnhu4duIEJpw6puIFBo4bun!5e0!3m2!1svi!2s!4v1686996474144!5m2!1svi!2s" width="285" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='items-center justify-center flex'>
                <p>© Copy right 2023 All Right Reserved | By Kiennecacban.</p>
            </div>
        </div>

    )
}

export default Footer