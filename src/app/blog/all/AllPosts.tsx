import CategorySelector, { CategorySelectorProps } from './CategorySelector'
import PostList, { PostListProps } from './PostList'

type Props = CategorySelectorProps & PostListProps
export default function AllPosts({ categories, posts }: Props) {
  return (
    <>
      <CategorySelector />
      <PostList />
    </>
  )
}
