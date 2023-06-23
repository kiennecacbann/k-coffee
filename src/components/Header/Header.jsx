import { React, useState } from 'react'
import images from '../../constants/images'
import { Link } from 'react-router-dom'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import MenuList from '../MenuList/MenuList'
import StoriesList from '../StoriesList/StoriesList'
const Header = () => {
    const [storyHovered, setStoryHovered] = useState(false);
    const menuHover = () => {
        setStoryHovered(true);
    };
    const menuMouseLeave = () => {
        setStoryHovered(false);
    }
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <nav className='sticky top-0'>
            <div className='px-[150px] max-h-[60px] w-full flex justify-between items-center bg-[#DBF0FB]'>
                <Link to='/'>
                    <img src={images.logo} alt='Logo Img' className='h-full w-[200px]' />
                </Link>
                <ul className='flex justify-between items-center space-x-14 uppercase font-bold '>
                    <Link to='/coffee'>
                        <li>
                            <a>COFFEE</a>
                        </li>
                    </Link>
                    <Link to='/tea'>
                        <li>
                            <a>TEA</a>
                        </li>
                    </Link>
                    <div className="relative inline-block h-full"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}>
                        <li class='after:bg-black after:h-full'>
                            <a className='items-center flex'>MENU <AiFillCaretDown />
                            </a>
                        </li>
                        {isHovered && (
                            <div className="absolute top-0 mt-[28px] shadow z-[99] w-full right-[690px] font-normal normal-case ">
                                <MenuList />
                            </div>
                        )}
                    </div>
                    <div className="relative inline-block h-full"
                        onMouseEnter={menuHover}
                        onMouseLeave={menuMouseLeave}>
                        <li>
                            <a className='flex items-center space-x-2'>OUR STORIES <AiFillCaretDown /></a>
                        </li>
                        {storyHovered && (
                            <div className="absolute top-0 mt-[42px] shadow z-[99] w-full right-[800px] font-normal normal-case ">
                                <StoriesList />
                            </div>
                        )}
                    </div>

                    <li>
                        <a>inspired of cloudfee</a>
                    </li>
                    <li>
                        <a>STORE</a>
                    </li>
                    <li>
                        <a>CAREER</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header