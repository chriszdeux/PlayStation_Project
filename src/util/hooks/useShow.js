import { useState } from "react"


export const useShow = ( initialState = false ) => {
  const [showContent, setShowContent] = useState( initialState )

  const toggleContent = () => {
    showContent ? setShowContent(false) : setShowContent(true)
  }

  return {
    showContent,
    toggleContent,
  }
}
