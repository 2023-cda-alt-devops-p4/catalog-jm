'use client'
import { createContext, useMemo, useReducer } from "react"

const initialState = []

function reducer(state, action) {
  switch (action.type) {
    case 'hydrate':
      state = action.payload
      return state
    case 'init':
      return initialState
  }
}

export const elementContext = createContext(initialState)

export const ElementContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <elementContext.Provider value={contextValue}>
      {children}
    </elementContext.Provider>
  )
}