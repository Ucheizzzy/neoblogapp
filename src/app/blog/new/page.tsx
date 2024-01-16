import { getCategories } from '@/actions/getCategories'
import NewBlogForm from './NewBlogForm'
export const dynamic = 'force-dynamic'
export default async function page() {
  const categories = await getCategories()
  return (
    <div>
      <NewBlogForm categories={categories} />
    </div>
  )
}
