import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import { Blog } from '../../../../payload-types'
import Footer from '../../components/FooterSection'

type Props = {
  params: {
    slug: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blogs?where[slug][equals]=${params.slug}`)
  const data = await response.json()

  if (!data.docs[0]) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: data.docs[0].meta?.title || data.docs[0].title,
    description: data.docs[0].meta?.description || data.docs[0].excerpt,
  }
}

export default async function BlogPost({ params }: Props) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/blogs?where[slug][equals]=${params.slug}&depth=2`)
  const data = await response.json()

  if (!data.docs[0]) {
    notFound()
  }

  const post = data.docs[0] as Blog

  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-yellow-400">{post.title}</h1>
          {post.category && (
            <div className="text-yellow-400/60 mb-4">
              Category: {typeof post.category === 'object' ? post.category.name : ''}
            </div>
          )}
          {post.featuredImage && typeof post.featuredImage === 'object' && (
            <div className="relative aspect-video mb-8">
              <Image
                src={post.featuredImage.url || ''}
                alt={post.featuredImage.alt}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          )}
        </header>
        <div className="prose prose-lg prose-invert prose-yellow max-w-none">
          {post.content && (
            <div className="text-yellow-100">
              {post.content.root?.children?.map((node: any, i: number) => (
                <div key={i}>
                  {node.children?.map((child: any, j: number) => (
                    <p key={j} className="mb-4">{child.text}</p>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
      <Footer />
    </div>
  )
}