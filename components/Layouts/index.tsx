import Navbar from 'components/Navbar'
import React from 'react'

const Layouts: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>footer test</footer>
    </div>
  )
}

export default Layouts
