'use client'

import { useState, useEffect } from "react";

import Image
 from "next/image";
type ImageCollectionType = {
  images: []
}

export default function ImageCollection({images}: ImageCollectionType) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  useEffect(() => setMainImageIndex(mainImageIndex), [mainImageIndex]);
  // function setMainImage() {
  // images.map((image: any, index: any) => {
  //   if(image.is_main_image != 1) {
  //     setMainImageIndex(index);
  //   })
  // }

  return (
    <section className='grid grid-cols-4 gap-2'>
      {images.map((image: any, index: any) => {
                                
          if(index != mainImageIndex) {
            return (
              // IF NOT A MAIN IMAGE
              <div className="relative [&>span]:hidden [&>span]:hover:block [&>span]:rounded-b-lg [&>span]:hover:absolute [&>span]:hover:bottom-0 [&>span]:bg-onyx [&>span]:hover:bottom-0 [&>span]:p-1 [&>span]:text-white">
                <Image key={`img_${index}`} className='rounded-lg md:overflow-mask-vert object-cover max-h-[60px] md:max-h-[156px]' onClick={() => setMainImageIndex(index)} src={image.file_path} width={864} height={400} alt={"Test"}/>
                <span className={`${image.caption ? "" : "hidden"} select-none`}>{image.caption ? image.caption : ""}</span>
              </div>
            )
          } else {
            return (
              <div className="relative md:[&>span]:hidden [&>span]:hover:block [&>span]:hover:absolute [&>span]:hover:bottom-0 [&>span]:bg-onyx [&>span]:p-2 [&>span]:text-white [&>span]:duration-150 col-span-4 order-first">
                <Image key={`img_${index}`} className="col-span-4 order-first rounded-t-lg overflow-mask-vert h-[400px] object-cover is-main-image" src={image.file_path} width={864} height={400} alt={"Test"}/>
                <span className="absolute bottom-0 select-none w-full rounded-b-lg">{image.caption ? image.caption : ""}</span>
              </div>
            )
          }
        })}
    </section>
  )
}