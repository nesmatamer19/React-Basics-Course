import { create } from 'json-server'
import React, { createContext } from 'react'
import { useState } from 'react';

export const usercontext = createContext();

const UserContextProvider = ({ children }) => {
    const [name, setName] = useState("Nesma");
  return (
    //pass value to children by usecontext hook in any component in the app
    //helps to avoid props drilling and share data between components without passing props to every level of the component tree
    <usercontext.Provider value={{ name, setName }}>
      {children}
    </usercontext.Provider>
  )
}

export default UserContextProvider