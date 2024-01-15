import { Category } from '@prisma/client'

export type CategorySelectorProps = {
  categories: Category[]
}

type CategorySelectorPropsWithStates = CategorySelectorProps & {
  handleCategoryClick: (id: number | null) => void
  selectCategoryId: number | null
}
export default function CategorySelector({
  categories,
  selectCategoryId,
  handleCategoryClick,
}: CategorySelectorPropsWithStates) {
  const bgClasses = ['bg-emerald-500', 'bg-blue-500', 'bg-yellow-500']
  return (
    <div className='flex flex-col justify-center my-4'>
      <div className='flex flex-wrap justify-center'>
        {categories.map((category, index) => (
          <button
            onClick={() => handleCategoryClick(category.id)}
            key={category.id}
            className={`inline-block rounded-full text-xl px-4 py-2 text-white mr-4 mb-4 ${
              bgClasses[index]
            } ${selectCategoryId === category.id ? 'neo-shadow' : ''} `}
          >
            {category.name}
          </button>
        ))}
      </div>
      {selectCategoryId ? (
        <button
          className='cursor-pointer underline'
          key='remove selection'
          onClick={() => handleCategoryClick(null)}
        >
          Remove Selection
        </button>
      ) : null}
    </div>
  )
}
