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
              
              <Image key={`img_${index}`} className='rounded-lg md:overflow-mask-vert object-cover max-h-[60px] md:max-h-[156px]' onClick={() => setMainImageIndex(index)} src={image.file_path} width={864} height={400} alt={"Test"}/>

            )
          } else {
            return (

              <Image key={`img_${index}`} className="col-span-4 order-first rounded-t-lg overflow-mask-vert h-[400px] object-cover is-main-image" src={image.file_path} width={864} height={400} alt={"Test"}/>
      

            )
          }
        })}
    </section>
  )
}