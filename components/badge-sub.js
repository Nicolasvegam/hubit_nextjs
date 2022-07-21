

export default function Badge({label}) {
  return (
    <>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-base font-medium bg-green-100 bg-indigo-100 text-indigo-800 cursor-default">
        {label}
      </span>
    </>
  )
}