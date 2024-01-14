import { Post } from '@prisma/client'

export type PostListProps = {
  posts: Post[]
}
export default function PostList() {
  return <div>PostList</div>
}
