export const formatCode = (code: string) => {
  const a = code.split('\n')
  const b: JSX.Element[] = []
  a.map((val, i) => {
    if (/@notice|@param/.test(val)) {
      b.push(
        <div className="code-block" key={i}>
          <span className="text-neutral-400">{i}</span>
          <span className="text-neutral-400">{val}</span>
        </div>
      )
    } else {
      b.push(
        <div className="code-block" key={i}>
          <span className="text-neutral-400">{i}</span>
          <span>{val}</span>
        </div>
      )
    }
  })
  return <pre className="p-8">{b}</pre>
}
