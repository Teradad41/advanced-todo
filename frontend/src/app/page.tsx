'use client'

import { useRouter } from 'next/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const router = useRouter()

  const navigateToCalendarPage = () => {
    router.push('/calendar')
  }

  return (
    <div className="w-screen h-screen overflow-hidden p-0 m-0 relative">
      <iframe
        loading="lazy"
        className="iframe p-0 m-0"
        src="https://www.canva.com/design/DAFz3cSlG5U/view?embed"
        allowFullScreen
        allow="fullscreen"
      ></iframe>
      <button
        type="button"
        onClick={navigateToCalendarPage}
        className="overlay-content bg-[#F7BE38] text-white hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-bold rounded-lg text-lg px-6 py-3.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
      >
        Get Started
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </button>
    </div>
  )
}
