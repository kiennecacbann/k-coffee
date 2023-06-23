import React from 'react'

const MenuList = () => {
  return (
    <div className='px-[150px] h-[250px] bg-white w-screen opacity-95'>
      <ul>
        <div className='flex justify-between text-start'>
          <div>
            <li className='menu-title'>All</li>
          </div>
          <div>
            <li className='menu-title'>Coffee</li>
            <ul>
              <li><a>Vietnamese Coffee</a></li>
              <li><a>Espresso</a></li>
              <li><a>Cold Brew</a></li>
            </ul>
          </div>
          <div>
            <li className='menu-title' >CloudFee</li>
            <ul>
              <li>CloudFee</li>
            </ul>
          </div>
          <div>
            <li className='menu-title'>CloudTea</li>
            <ul>
              <li>CloudTea</li>
            </ul>
          </div>
          <div>
            <li className='menu-title'>Tea</li>
            <ul>
              <li>Fruit Tea</li>
              <li>Milk Tea</li>
              <li>Macchiato</li>
            </ul>
          </div>
          <div>
            <li className='menu-title'>HiTea </li>
            <ul>
              <li>Tea</li>
              <li>Iced</li>
            </ul>
          </div>
          <div>
            <li className='menu-title'>Iced </li>
            <ul>
              <li>Frosty Iced</li>
            </ul>
          </div>
          <div>
            <li className='menu-title'>Cake & Snack</li>
            <ul>
              <li>Cake</li>
              <li>Snack</li>
            </ul>
          </div>
          <div>
            <li className='menu-title'>At home</li>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
            </ul>
          </div>
          <div>
            <li className='menu-title'>Others</li>
            <ul>
              <li>Chocolate</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default MenuList