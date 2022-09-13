import * as React from 'react'

type Props = {
  title?: any
  titleId?: string
  className?: string
  props?: React.ComponentProps<'svg'>
}

function GithubIcon(
  { title, titleId, ...props }: Props,
  svgRef: any
): JSX.Element {
  return React.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 48 48',
        fill: 'currentColor',
        'aria-hidden': 'true',
        ref: svgRef,
        'aria-labelledby': titleId,
      },
      props
    ),
    title
      ? React.createElement(
          'title',
          {
            id: titleId,
          },
          title
        )
      : null,
    React.createElement('path', {
      fillRule: 'evenodd',
      d: 'M24 0.593994C10.74 0.593994 0 11.34 0 24.594C0 35.2 6.876 44.194 16.41 47.364C17.61 47.59 18.05 46.848 18.05 46.21C18.05 45.64 18.03 44.13 18.02 42.13C11.344 43.578 9.936 38.91 9.936 38.91C8.844 36.14 7.266 35.4 7.266 35.4C5.092 33.912 7.434 33.942 7.434 33.942C9.844 34.11 11.11 36.414 11.11 36.414C13.25 40.084 16.728 39.024 18.1 38.41C18.316 36.858 18.934 35.8 19.62 35.2C14.29 34.6 8.688 32.536 8.688 23.34C8.688 20.72 9.618 18.58 11.158 16.9C10.888 16.294 10.078 13.854 11.368 10.548C11.368 10.548 13.378 9.90399 17.968 13.008C19.888 12.474 21.928 12.21 23.968 12.198C26.008 12.21 28.048 12.474 29.968 13.008C34.528 9.90399 36.538 10.548 36.538 10.548C37.828 13.854 37.018 16.294 36.778 16.9C38.308 18.58 39.238 20.72 39.238 23.34C39.238 32.56 33.628 34.59 28.288 35.18C29.128 35.9 29.908 37.372 29.908 39.62C29.908 42.832 29.878 45.412 29.878 46.192C29.878 46.822 30.298 47.572 31.528 47.332C41.13 44.184 48 35.184 48 24.594C48 11.34 37.254 0.593994 24 0.593994',
      clipRule: 'evenodd',
    })
  )
}

export default React.forwardRef(GithubIcon)
