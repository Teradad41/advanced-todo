'use client'

import React, { useEffect, useState } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import axios, { AxiosResponse } from 'axios'

import { Header } from '@/components/Header'

export default function Page() {
  const [holidays, setHolidays] = useState([])

  useEffect(() => {
    axios
      .get('https://holidays-jp.github.io/api/v1/date.json')
      .then((response: AxiosResponse) => {
        const holidayData = Object.entries(response.data).map(
          ([date, name]) => ({
            title: name,
            start: date,
            allDay: true,
            backgroundColor: 'red',
            editable: false
          })
        )
        // @ts-ignore
        setHolidays(holidayData)
      })
      .catch((error) => console.log(`Error: ${error}`))
  }, [])
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="pt-8 px-[3rem]">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale="ja"
          timeZone="Asia/Tokyo"
          editable={true}
          selectable={true}
          businessHours={true}
          events={holidays}
          dayCellContent={(arg: DateClickArg) => arg.date.getDate()}
          headerToolbar={{
            left: 'prev',
            center: 'title',
            right: 'next'
          }}
          eventTimeFormat={{ hour: 'numeric', minute: '2-digit' }}
          contentHeight={'750px'}
        />
      </div>
    </div>
  )
}
