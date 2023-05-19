"use client"
import { useTheme } from 'next-themes'
// Icons
import { MdModeNight, MdLightMode } from 'react-icons/md'

const DarkMode = () => {
  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      {currentTheme === 'dark' ?
        <MdLightMode onClick={()=>setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500'/>
        :
        <MdModeNight onClick={()=>setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500' />
      }
    </>
  )
}
export default DarkMode;