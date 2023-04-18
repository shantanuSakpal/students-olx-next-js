import React from 'react'
import SuggestionButtons from './SuggestionButton'
import { FaSearch } from 'react-icons/fa'
const SerachBar = () => {
  return (
    <div className='search-bar w-full ' >

      <form>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
        <div className="relative">

          <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-900  rounded-lg bg-gray-50 focus:ring-gray-900  focus:border-gray-900    placeholder-purborder-gray-900   " placeholder="Search ..." required />
          <button type="submit" className="text-gray-900 absolute right-2.5 top-1 bottom-1  focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm px-4 py-2 "><FaSearch /></button>
        </div>
      </form>

      <SuggestionButtons items={['car', 'calculator', 'cloths', 'notes', 'Books', 'Sports', 'Accessories', 'Others']} />

    </div>
  )
}

export default SerachBar
