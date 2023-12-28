import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="px-7 py-2.5 text-white bg-gray-50 shadow-md">
      <Link href={'/calendar'} passHref className="flex">
        <Image
          src="/logo-removebg.png"
          width={60}
          height={60}
          alt="Logo Image"
        />
        <h1 className="text-gray-700 text-4xl ml-1 mt-2.5">Advanced Todo</h1>
      </Link>
    </header>
  )
}
