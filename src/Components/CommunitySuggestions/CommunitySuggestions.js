import React from 'react'
import CommunityCard from './CommunityCard'

let communityData = [
  {
      "name":"JavaScript Community",
      "members":1232,
      "banner":"./community-imgs/js.jpg"

  },
  {
      "name":"Python Community",
      "members":1232,
      "banner":"./community-imgs/python.jpg"
  },
  {
      "name":"Java Community",
      "members":1232,
      "banner":"./community-imgs/java.jpg"
  },
  {
      "name":"App Dev Community",
      "members":1232,
      "banner":"./community-imgs/android.jpg"
  },
  {
      "name":"Data Science Community",
      "members":1232,
      "banner":"./community-imgs/ds.jpg"
  }
]

function CommunitySuggestions() {
  return (
    <section className='my-8 py-2 grid grid-cols-3 gap-4'>
        {
          communityData.map((item)=>{
            return <CommunityCard communityName={item.name} communityBanner={item.banner} communityUsers={item.members}/>
          })
        }
        
    </section>
  )
}

export default CommunitySuggestions