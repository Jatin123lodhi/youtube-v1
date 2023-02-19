import React from 'react'

export const VideoCard = ({info}) => {
   //console.log(info)
   const {snippet, statistics} = info;
   const {channelTitle,title,thumbnails} = snippet;
   const {viewCount} = statistics;
  return (
    <div className='my-2 mx-4 w-72 '>
        
        <ul>
            <li className=' h-40   overflow-hidden rounded-lg flex items-center '><img className='h-56 w-full' src={thumbnails.high.url} alt='videoImg' /></li>
            <li className='py-2 font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{viewCount} views</li>
        </ul> 
    </div>
  )
}
