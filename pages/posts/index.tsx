import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import { postFilePaths, POSTS_PATH } from 'utils/mdx'
import Seo from 'components/Seo'
import PageTitle from 'components/PageTitle'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const style = {
  wrapper: `min-h-[calc(100vh-128px)] max-w-[1280px] mx-auto flex flex-col`,
  description: `text-neutral-400 text-xs uppercase my-4`,
  post: `flex items-center justify-between space-x-4 bg-neutral-900 hover:bg-neutral-800  text-neutral-400 hover:text-white h-16 px-4 uppercase overflow-auto whitespace-nowrap`,
  tag: `text-neutral-600 text-sm`,
}

export default function Posts({ posts }: { posts: any }) {
  return (
    <>
      <Seo title="Posts" />
      <div className={style.wrapper}>
        <PageTitle title="explore posts" />
        <p className={style.description}>
          click the link below to navigate to a page
        </p>
        <ul className="space-y-[1px]">
          {posts.map((post: any) => (
            <li key={post.filePath}>
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className={style.post}>
                  <span className="flex items-center">
                    <ArrowUpRightIcon className="w-5 h-5 mr-4 text-neutral-600" />
                    {post.data.title}
                  </span>
                  <span className={style.tag}>{post.data.tag}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
