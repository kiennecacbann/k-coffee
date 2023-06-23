import React from 'react'

const StoriesList = () => {
    return (
        <div className='px-[150px] h-[200px] bg-white w-screen opacity-95'>
            <ul>
                <div className='grid grid-cols-3 gap-14 text-start'>
                    <div>
                        <li className='menu-title'>CoffeeHolic</li>
                        <ul>
                            <li><a>Vietnamese Coffee</a></li>
                            <li><a>Espresso</a></li>
                            <li><a>Cold Brew</a></li>
                        </ul>
                    </div>
                    <div>
                        <li className='menu-title'>TeaHolic</li>
                        <ul>
                            <li>Fruit Tea</li>
                            <li>Milk Tea</li>
                            <li>Macchiato</li>
                        </ul>
                    </div>
                    <div>
                        <li className='menu-title'>Blog</li>
                        <ul>
                            <li>Chocolate</li>
                        </ul>
                    </div>
                </div>
            </ul>
        </div>)
}

export default StoriesList