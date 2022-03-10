import React from 'react'

const Overlay: React.FC = ({ children }) => {
    return (
        <div className='w-screen h-screen bg-black'>{children}</div>
    )
}

export default Overlay