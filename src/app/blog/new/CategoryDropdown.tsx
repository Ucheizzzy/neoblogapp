import { useState } from 'react'

type SelectOptionProps = {
  id: number
  name: string
}
type categoryProps = {
  list: SelectOptionProps[]
  selected: number | null
  setSelected: (select: number) => void
}
export default function CategoryDropdown({
  list,
  selected,
  setSelected,
}: categoryProps) {
  const [open, setOpen] = useState<boolean>(false)

  const selectOption = (id: number) => {
    setSelected(id)
    setOpen(false)
  }
  const currSelection = list.find((item) => item.id === selected) || {
    name: 'Select a category',
  }
  return (
    <div className='my-6'>
      <button
        onClick={() => setOpen(!open)}
        type='button'
        className='px-3 py-3 bg-yellow-500 rounded-md border'
      >
        {currSelection.name}
      </button>
      {open ? (
        <div className='absolute mt-2 bg-white rounded-md border new-shadow'>
          {list.map((item) => (
            <div
              className='px-3 py-2 hover:bg-gray-100 cursor-pointer'
              key={item.id}
              onClick={() => selectOption(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
