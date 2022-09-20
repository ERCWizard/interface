import Link from 'next/link'

const style = {
  pre: `bg-neutral-900 p-8 text-sm font-RobotoMono overflow-auto`,
  link: `text-neutral-400 hover:text-white flex items-center text-sm sm:text-base`,
}

export const components = {
  pre: (props: any) => <pre className={style.pre} {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return (
        <a
          className={style.link}
          href={href}
          target="_blank"
          rel="noreferrer"
          {...props}
        />
      )
    }

    return (
      <Link href={href} passHref>
        <a className={style.link} {...props} />
      </Link>
    )
  },
}
