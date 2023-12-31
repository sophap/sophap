import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { sophielogo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={sophielogo} alt="sophielogo" className='w-10 h-10 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Praise &nbsp;<span className='sm:block hidden'>| Sophia Right</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${ 
                active === link.title 
                ? "text-white" 
                : "text-secondary" 
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <a className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer" onClick={() => window.open("https://drive.google.com/file/d/1SkvI6DuKAl5UaKjKXV8Sz43KOH8sPaHH/view", "_blank")}>Resume </a>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? "hidden" 
            :"flex" } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title 
                    ? "text-white" 
                    : "text-secondary" 
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
            <a className="text-secondary font-poppins font-medium cursor-pointer text-[16px]" onClick={() => window.open("https://drive.google.com/file/d/1SkvI6DuKAl5UaKjKXV8Sz43KOH8sPaHH/view", "_blank")}>Resume </a>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar