/* This example requires Tailwind CSS v2.0+ */
export default function Badge({label}) {
  return (
    <>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
        {label}
      </span>
    </>
  )
}