import { dividerClasses } from '@mui/material'
import React from 'react'
import MechanicDisplay from '../../components/mechanics-index'

function Mechanics() {
  return (
    <div>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <a href="#">
                <span className="sr-only">Carvuk</span>
                <img
                className="h-8 w-auto sm:h-10"
                src="../carvuk-logo.svg"
                alt=""
                />
            </a>
          </div>
        </header>
<MechanicDisplay></MechanicDisplay>
    </div>
  )
}

export default Mechanics