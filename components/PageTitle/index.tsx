const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="py-4 border-b border-neutral-900">
      <h1 className="capitalize text-xl font-Poppins">{title}</h1>
    </div>
  )
}

export default PageTitle
