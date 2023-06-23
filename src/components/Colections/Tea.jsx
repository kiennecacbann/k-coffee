import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Tea = () => {
    return (
        <div>
            <Header />
            <div className='pt-[50px] px-[150px] pb-7'>
                <h2 className='font-bold text-2xl'>TEA</h2>
            </div>
            <div className='px-[150px] grid grid-cols-4 md:grid-cols-4 gap-7 pb-[100px]'>
                <div className=''>
                    <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1669706771_bg-tradao-min_85ec6c84e83d45269ef2ae1e3be4df5a_large.jpg' />
                    <p className='font-bold'>Tra Vi Dao</p>
                    <p className='price'>3$</p>
                </div>
                <div>
                    <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1669880647_bg-trasua-min_f68a0266423a451fb78b9c43440736a4_large.jpg' />
                    <p className='font-bold'>Tra Sua Tran Chau</p>
                    <p className='price'>3$</p>
                </div>
                <div>
                    <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1669706748_bg-tratatmatong-min_bee2a8188af34646b493c8f3acb08477_large.jpg' />
                    <p className='font-bold'>Tra Tac Mat Ong</p>
                    <p className='price'>3$</p>
                </div>
                <div>
                    <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_a9e1a758ad794963be53d626753c0e59_large.jpg' />
                    <p className='font-bold'>Ca Phe Da</p>
                    <p className='price'>3$</p>
                </div>
                <div>
                    <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_a9e1a758ad794963be53d626753c0e59_large.jpg' />
                    <p className='font-bold'>Ca Phe Da</p>
                    <p className='price'>3$</p>
                </div>
                <div>
                    <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_a9e1a758ad794963be53d626753c0e59_large.jpg' />
                    <p className='font-bold'>Ca Phe Da</p>
                    <p className='price'>3$</p>
                </div>
                <div>
                    <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_a9e1a758ad794963be53d626753c0e59_large.jpg' />
                    <p className='font-bold'>Ca Phe Da</p>
                    <p className='price'>3$</p>
                </div>
                <div>
                    <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_a9e1a758ad794963be53d626753c0e59_large.jpg' />
                    <p className='font-bold'>Ca Phe Da</p>
                    <p className='price'>3$</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Tea