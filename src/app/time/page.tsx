import dayjs from 'dayjs'
import React from 'react'

const Page = () => {
    const date = dayjs('2024-08-03 17:50:33.865873 +0000 UTC');
    console.log(date.toString());


  return (
    <div>
        <h1>time</h1>
        <div>2024-08-03 17:50:33.865873 +0000 UTC</div>
        <div>{date.format('HH:mm')}</div>
        <br />

        <div>now</div>
        <div>{dayjs().format('HH:mm')}</div>
        
    </div>
  )
}

export default Page