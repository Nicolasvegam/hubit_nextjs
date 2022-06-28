/* This example requires Tailwind CSS v2.0+ */
export default function Badge({label}) {
  return (
    <>
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
        {label}
      </span>
    </>
  )
}