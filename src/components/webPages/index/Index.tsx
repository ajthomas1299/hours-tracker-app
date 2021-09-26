import React, { useState, useEffect } from 'react'
import { MainBtns } from "data/mainMenu"
import NextLink from "components/links/NextLink"
import { DEFAULT_THEME } from 'themes';
import { applyTheme } from 'themes/utils';

const Index = () => {
const [theme, setTheme ] = useState(DEFAULT_THEME);

useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div className="flex flex-col items-center h-screen w-full">
      <div className="flex w-screen text-primary font-semibold text-xl justify-center items-center h-12 bg-indigo-800">
        <h1>Home Menu</h1>
      </div>
      <div className="flex flex-col items-center justify-evenly h-full w-screen">
    {
      MainBtns.map(( item ) => (
        <NextLink 
          href={ item.link }
          key={ item.id }
        >
          { item.text }
        </NextLink>
      ))
    }
    </div>
    </div>
  )
}

export default Index
