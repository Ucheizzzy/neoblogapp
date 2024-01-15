'use client'
import { useState } from 'react'
import CategorySelector, { CategorySelectorProps } from './CategorySelector'
import PostList, { PostListProps } from './PostList'

type Props = CategorySelectorProps & PostListProps
export default function AllPosts({ categories, posts }: Props) {
  const [selectCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  )
  const handleCategoryClick = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId)
  }

  const filteredPosts = selectCategoryId
    ? posts.filter((post) =>
        post.categories.find((category) => category.id === selectCategoryId)
      )
    : posts
  // console.log(filteredPosts)

  return (
    <>
      <CategorySelector
        categories={categories}
        selectCategoryId={selectCategoryId}
        handleCategoryClick={handleCategoryClick}
      />
      <PostList posts={filteredPosts} />
    </>
  )
}
