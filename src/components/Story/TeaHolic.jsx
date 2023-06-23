import React from 'react'

const TeaHolic = () => {
    const data = {
        title: "SIGNATURE - BIỂU TƯỢNG VĂN HOÁ CÀ PHÊ CỦA THE COFFEE HOUSE ĐÃ QUAY TRỞ LẠI",
        dsc: "Theo đó, SIGNATURE by The Coffee House sẽ gửi đến các thành viên của Nhà những Cuộc hẹn tròn đầy với 3 trải nghiệm: Tách cà phê đặc sản với những mẻ rang mới mỗi ngày, chiều lòng mọi tâm hồn yêu cà phê hay những ai đang tò mò về loại trái cây đặc biệt này; Món ăn đa bản sắc, mang phong vị giao thoa từ nhiều nơi cho cuộc hẹn dài hơn, rôm rả hơn; Một không gian đầy cảm hứng, nơi hạt cà phê kể về hành trình tuyệt vời của mình theo cách gần gũi nhất. Bạn sẽ có cơ hội thưởng thức cà phê bằng đủ những giác quan - ngửi hương, lắng nghe, ngắm nhìn và nếm vị."

    }
    const maxLengthDec = 200;
    const maxLengthTitle = 100;
    const shortDec = data.dsc.slice(0, maxLengthDec);
    console.log(shortDec)
    const shortTitle = data.title.slice(0,maxLengthTitle);
    return (
        <div className='pt-[80px] px-[150px]'>
            <div className='border-s-4 border-[#CC9933]'>
                <h2 className='font-bold text-[30px] ml-4 '>TEA</h2>
            </div>
            <div className='grid grid-cols-3 pt-10 gap-5'>
                <div className='text-justify space-y-2'>
                    <img className='rounded-xl' src='https://file.hstatic.net/1000075078/file/grandview1_281ebbd42e1e40368c783002bfda0054_master.jpg' />
                    <p className='text-gray-400'>12/02/2023</p>
                    <h2 className='truncate font-bold uppercase text-[20px]'>{shortTitle}</h2>
                    <p className='truncate'>{shortDec}</p>
                </div>
                <div className='text-justify space-y-2'>
                    <img className='rounded-xl' src='https://file.hstatic.net/1000075078/file/grandview1_281ebbd42e1e40368c783002bfda0054_master.jpg' />
                    <p className='text-gray-400'>12/02/2023</p>
                    <h2 className='overflow-hidden truncate font-bold uppercase text-[20px]'>{shortTitle}</h2>
                    <p className='overflow-hidden truncate'>{shortDec}</p>
                </div>
                <div className='text-justify space-y-2'>
                    <img className='rounded-xl' src='https://file.hstatic.net/1000075078/file/grandview1_281ebbd42e1e40368c783002bfda0054_master.jpg' />
                    <p className='text-gray-400'>12/02/2023</p>
                    <h2 className='overflow-hidden truncate font-bold uppercase text-[20px]'>{shortTitle}</h2>
                    <p className='overflow-hidden truncate'>{shortDec}</p>
                </div>
            </div>
        </div>
    )
}

export default TeaHolic