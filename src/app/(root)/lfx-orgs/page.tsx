'use client'
import React, { useState } from 'react'
import Lfx_Orgs from '../_components/Lfx_orgs'
import { div } from 'framer-motion/client'
import SearchFilters from '../_components/filters'

const page = () => {
    const [filters, setFilter] = useState({
        technologies: [],
        gsoc_years: [],
        topics: [],
      });
  return (
    <div className='h-full overflow-auto m-auto pt-20'>
        <div className='mb-10'>

    <SearchFilters onFilterChange={setFilter}/>
        </div>
    <Lfx_Orgs top={false} filters={filters}/>

    </div>
  )
}

export default page