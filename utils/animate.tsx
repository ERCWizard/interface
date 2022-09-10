export function glitchInText(text: any) {
  const a = [...text]
  const b: JSX.Element[] = []
  a.map((c, i) =>
    b.push(
      <span
        style={{
          visibility: 'hidden',
          animationName: 'glitchIn',
          animationDuration: '0.1s',
          animationDelay: `${i / 20}s`,
          animationFillMode: 'forwards',
          animationIterationCount: '1',
        }}
      >
        {c}
      </span>
    )
  )
  return b
}
