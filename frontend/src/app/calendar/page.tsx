'use client'

import React from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import jaLocale from '@fullcalendar/core/locales/ja'

import { Header } from '@/components/Header'

export default function Page() {
  const handleClick = (arg: DateClickArg) => {
    alert(`${arg.date}`)
  }

  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="p-7">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={(arg: DateClickArg) => handleClick(arg)}
          locale={jaLocale}
          dayCellContent={(arg: DateClickArg) => arg.date.getDate()}
          businessHours={true}
          headerToolbar={{
            left: 'prev',
            center: 'title',
            right: 'next'
          }}
          contentHeight={'750px'}
        />
      </div>
    </div>
  )
}
