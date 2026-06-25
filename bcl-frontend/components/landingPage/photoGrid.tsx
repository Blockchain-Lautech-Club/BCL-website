import React from 'react'
import Image from 'next/image'

export function PhotoGrid() {
  return (
    <div className="absolute right-10 top-0 bottom-5">
            <div className="space-x-">
              <div className="shape-1 absolute right-60 top-[40px] w-80 h-64">
                <Image
                  src="/event/confluence-1.jpg"
                  alt="Blockchain event speaker"
                  fill
                  className="object-fill rounded-2xl"
                />
              </div>
              <div className="shape-2 absolute right-0 top-[139px] w-56 h-40">
                <Image
                  src="/event/confluence-2.jpg"
                  alt="Presentation slide"
                  fill
                  className="object-fill rounded-2xl"
                />
              </div>
            </div>
            <div className=" space-x-5">
              <div className="shape-3 absolute right-150 top-[310px] w-48 h-40">
                <Image
                  src="/event/confluence-3.jpg"
                  alt="Event audience"
                  fill
                  className="object-fill rounded-2xl"
                />
              </div>
              <div className="shape-4 absolute right-65 top-[310px] w-80 h-64">
                <Image
                  src="/event/confluence-4.jpg"
                  alt="Crowd at blockchain event"
                  fill
                  className="object-fill rounded-2xl"
                />
              </div>
              <div className="shape-5 absolute right-5 top-[310px] w-60 h-48">
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
