import React from 'react'

const BestSeller = () => {
    return (
        <div className='px-[150px]'>
            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <img className='rounded-xl' src='https://file.hstatic.net/1000075078/file/banner_app_copy_b65eedf05acb444490937926d98f4ae5.jpg' alt='Image' />
                </div>
                <div className='flex justify-between gap-5'>
                    <div className=''>
                        <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1675357918_cloudfee-hanh-nhan-nuong-min_8517e079ecbb4af3ac50b8bd3970869c_large.png' />
                        <p className='font-bold'>Ca Phe Hanh Nhan Nuong</p>
                        <p>3$</p>
                    </div>
                    <div>
                        <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_a9e1a758ad794963be53d626753c0e59_large.jpg' />
                        <p className='font-bold'>Ca Phe Da</p>
                        <p>3$</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between gap-5 py-5'>
                <div>
                    <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_8ec3ec80029f446b84abf3676f545076_large.png' />
                    <p className='font-bold'>Ca Phe Sua</p>
                    <p>3$</p>
                </div>
                <div>
                    <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1669736893_hi-tea-vai_941d8005b1a148068a224655beb92c7c_large.png' />
                    <p className='font-bold'>Tra Vai</p>
                    <p>3$</p>
                </div>
                <div>
                    <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1638440015_banh-mi-vietnam_f886eb0463bc487284f4e515cbd1bea6_large.jpg' />
                    <p className='font-bold'>Banh Mi Thit Nguoi</p>
                    <p>3$</p>
                </div>
                <div>
                    <img className='rounded-xl' src='https://product.hstatic.net/1000075078/product/1655348107_mochi-choco_b79e6739ca36468a893ccb016e34c906_large.jpg' />
                    <p className='font-bold'>Mochi Kem Chocolate</p>
                    <p>3$</p>
                </div>
            </div>
        </div>
    );
}
export default BestSeller