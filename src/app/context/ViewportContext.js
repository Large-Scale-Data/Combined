import React, {useContext, useEffect, useState, createContext} from 'react';

export const ViewportContext = createContext();

export const ViewPortProvider = ({children}) => {
  //logic for calculating viewport size

  const [viewWidth, setViewWidth] = useState(window.innerWidth)
  const [viewHeight, setViewHeight] = useState(window.innerHeight)

  const handleWindowResize = () =>{
    setViewWidth(window.innerWidth)
    setViewHeight(window.innerHeight)
  }
  //useEffect to listen for changes in size
    useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  //provider 
  return (
    <ViewportContext.Provider value ={{viewWidth, viewHeight}}>
      {children}
    </ViewportContext.Provider>
  )
}

//useViewport, custom hook that utilizes context to 
export const useViewport = () => {
  const {viewWidth, viewHeight} = useContext(ViewportContext)
  return{viewWidth, viewHeight}
}