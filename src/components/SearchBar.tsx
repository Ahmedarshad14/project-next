"use client"
import { useState } from "react"
import SearchManufacturer from "@/components/SearchManufacturer"

const SearchBar = () => {
    const handleSearch = () => {}
    const [manufacturer, setManufacturer] = useState('')
  return (
    <form action="" onSubmit={handleSearch} className="search-bar">
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar