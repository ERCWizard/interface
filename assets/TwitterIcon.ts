import * as React from 'react'

type Props = {
  title?: any
  titleId?: string
  className?: string
  props?: React.ComponentProps<'svg'>
}

function TwitterIcon({ title, titleId, ...props }: Props, svgRef: any): JSX.Element {
  return React.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 48 40',
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
      d: 'M46.9125 4.88601C46.158 5.22051 45.3825 5.50251 44.5905 5.73201C45.5345 4.66528 46.2461 3.41374 46.68 2.05701C46.7275 1.9075 46.7284 1.74709 46.6827 1.59704C46.6369 1.44699 46.5467 1.31438 46.4239 1.21679C46.3011 1.11919 46.1515 1.06121 45.995 1.05054C45.8385 1.03986 45.6824 1.07699 45.5475 1.15701C43.8727 2.15128 42.0497 2.87137 40.1475 3.29001C38.2173 1.40858 35.6295 0.353886 32.934 0.350006C31.4688 0.351596 30.0208 0.665289 28.6864 1.2702C27.3519 1.87511 26.1616 2.75736 25.1947 3.85821C24.2278 4.95906 23.5066 6.25325 23.0789 7.65462C22.6512 9.05599 22.527 10.5324 22.7145 11.9855C19.2082 11.6734 15.7998 10.6627 12.6902 9.01292C9.58054 7.36316 6.83251 5.10773 4.60802 2.37951C4.5289 2.28253 4.42744 2.20618 4.31235 2.15702C4.19725 2.10785 4.07195 2.08733 3.94718 2.09721C3.82241 2.10709 3.7019 2.14708 3.59598 2.21375C3.49006 2.28042 3.40188 2.37178 3.33902 2.48001C2.42442 4.05342 1.94309 5.84109 1.94402 7.66101C1.94402 10.1435 2.82902 12.4985 4.39502 14.339C3.91861 14.1742 3.45739 13.9684 3.01652 13.724C2.8999 13.659 2.76847 13.6253 2.63498 13.6262C2.5015 13.627 2.3705 13.6624 2.25471 13.7288C2.13892 13.7952 2.04228 13.8905 1.97417 14.0053C1.90606 14.1201 1.8688 14.2505 1.86602 14.384V14.5205C1.86602 18.2255 3.86102 21.563 6.90902 23.3825C6.64644 23.3562 6.38518 23.3182 6.12602 23.2685C5.99423 23.2434 5.85819 23.253 5.73123 23.2964C5.60427 23.3397 5.49075 23.4153 5.40181 23.5157C5.31288 23.6162 5.25157 23.738 5.22391 23.8692C5.19624 24.0005 5.20317 24.1367 5.24402 24.2645C5.79138 25.9736 6.77579 27.5101 8.09972 28.7217C9.42366 29.9333 11.0412 30.778 12.792 31.172C9.87167 33.0015 6.49258 33.9658 3.04652 33.953C2.31752 33.953 1.58252 33.9095 0.864017 33.8255C0.691094 33.8071 0.516987 33.8473 0.369664 33.9397C0.22234 34.0321 0.11035 34.1713 0.0516845 34.335C-0.00698134 34.4987 -0.00891848 34.6774 0.0461843 34.8424C0.101287 35.0073 0.210231 35.1489 0.355517 35.2445C4.8386 38.1232 10.0548 39.6525 15.3825 39.65C25.8735 39.65 32.4375 34.703 36.0945 30.5525C40.656 25.3775 43.272 18.5285 43.272 11.7605C43.272 11.477 43.2675 11.1905 43.2585 10.907C45.0593 9.55057 46.6182 7.89988 47.8695 6.02451C47.963 5.88511 48.0087 5.71911 47.9996 5.55151C47.9905 5.38392 47.9272 5.22381 47.8192 5.09533C47.7112 4.96685 47.5644 4.87696 47.4008 4.8392C47.2373 4.80144 47.0659 4.81787 46.9125 4.88601V4.88601Z',
      clipRule: 'evenodd',
    })
  )
}

export default React.forwardRef(TwitterIcon)
