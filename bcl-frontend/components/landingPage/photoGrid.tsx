import React from 'react'
import Image from 'next/image'

export function PhotoGrid() {
  return (
    <div className="absolute right-10 top-0 bottom-5 hidden lg:block">
            <div className="space-x-">
              <div className="shape-1 absolute right-54 top-[60px] w-76 h-55">
                <Image
                  src="/event/confluence-1.jpg"
                  alt="Blockchain event speaker"
                  fill
                  className="object-fill rounded-2xl"
                />
              </div>
              <div className="shape-2 absolute right-0 top-[130px] w-50 h-36">
                <Image
                  src="/event/confluence-2.jpg"
                  alt="Presentation slide"
                  fill
                  className="object-fill rounded-2xl"
                />
              </div>
            </div>
            <div className=" space-x-5">
              <div className="shape-3 absolute right-140 top-[320px] w-36 h-34">
                <Image
                  src="/event/confluence-3.jpg"
                  alt="Event audience"
                  fill
                  className="object-fill rounded-2xl"
                />
              </div>
              <div className="shape-4 absolute right-60 top-[320px] w-76 h-55">
                <Image
                  src="/event/confluence-4.jpg"
                  alt="Crowd at blockchain event"
                  fill
                  className="object-fill rounded-2xl"
                />
              </div>
              <div className="shape-5 absolute right-4 top-[320px] w-56 h-44">
                <Image
                  src="/event/confluence-5.jpg"
                  alt="Event attendees"
                  fill
                  className="object-fill rounded-2xl"
                />
              </div>
            </div>
        </div>
  )
} 
