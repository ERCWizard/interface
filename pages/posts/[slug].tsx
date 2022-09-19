import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'
import path from 'path'
import Seo from 'components/Seo'
import { postFilePaths, POSTS_PATH } from 'utils/mdx'
import { ArrowLeftIcon, LinkIcon, TagIcon } from '@heroicons/react/20/solid'
import { useCopyClipboard } from 'hooks/useCopyClipboard'

const components = {
  pre: (props: any) => (
    <pre
      className="bg-neutral-900 p-8 text-sm font-RobotoMono overflow-auto"
      {...props}
    />
  ),
  a: (props: any) => (
    <a
      className="text-neutral-400 hover:text-white flex items-center text-sm sm:text-base"
      {...props}
    />
  ),
}

const style = {
  wrapper: `min-h-[calc(100vh-128px)] max-w-[1280px] mx-auto flex flex-col`,
  header: `space-y-4 mb-8`,
  navButton: `uppercase text-neutral-400 flex items-center w-fit text-xs hover:text-white space-x-2`,
  headline: `capitalize text-2xl sm:text-4xl font-Poppins`,
  description: `text-neutral-400 text-sm uppercase`,
  tag: `flex items-center text-neutral-400 text-xs uppercase space-x-2`,
  icon: `w-4 h-4`,
}

export default function Post({ source, frontMatter, slug }: any) {
  const { copied, copy } = useCopyClipboard()

  return (
    <>
      <Seo title={slug} description={frontMatter.title} />
      <article className={style.wrapper}>
        <header className={style.header}>
          <nav className="flex justify-between">
            <Link href="/posts">
              <a className={style.navButton}>
                <ArrowLeftIcon className={style.icon} />
                <span>go back</span>
              </a>
            </Link>
            <button
              className={style.navButton}
              onClick={() =>
                copy(typeof window !== 'undefined' && window.location.href)
              }
            >
              <span>{copied ? 'copied' : 'copy link'}</span>
              <LinkIcon className={style.icon} />
            </button>
          </nav>
          <h1 className={style.headline}>{frontMatter.title}</h1>
          <p className={style.description}>{frontMatter.description}</p>
          <div className={style.tag}>
            <TagIcon className={style.icon} />
            <span>{frontMatter.tag}</span>
          </div>
        </header>
        <main className="space-y-4">
          <MDXRemote {...source} components={components} />
        </main>
      </article>
    </>
  )
}

export const getStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      slug: params.slug,
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path: any) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug: any) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
