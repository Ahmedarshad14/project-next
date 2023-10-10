'use client'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { SearchManufacturerProps } from '../../types'
const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerProps ) => {
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className='absolute top-[14px]'>
            <Image src="/car-logo.svg" width={20} height={20} alt='Car Logo' className='ml-4' />

          </Combobox.Button>
          <Combobox.Input className='search-manufacturer__input'placeholder='Honda'/>
        </div>
      </Combobox>

    </div>
  )
}

export default SearchManufacturer