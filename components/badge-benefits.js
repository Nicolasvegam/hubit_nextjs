import Link from 'next/link';

export default function Badge({label}) {
  return (
    <>
    <Link href="/carvuk-pro">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800 cursor-pointer">
        {label}
      </span>
    </Link>
    </>
  )
}