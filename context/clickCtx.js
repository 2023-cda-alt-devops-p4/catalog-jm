'use client'
import { createContext, useMemo, useReducer } from "react"

const initialState = ''

function reducer(state, action) {
  switch (action.type) {
    case 'click':
      state = action.payload
      return state
  }
}

export const clickContext = createContext(initialState)

export const ClickContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <clickContext.Provider value={contextValue}>
      {children}
    </clickContext.Provider>
  )
}