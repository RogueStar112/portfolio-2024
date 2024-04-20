'use client'

import { useState, useEffect } from "react";

import Image
 from "next/image";
type ImageCollectionType = {
  images: []
}

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)



import { FaWandMagicSparkles } from "react-icons/fa6";


import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


export default function ImageCollection({images}: ImageCollectionType) {

  const [mounted, setMounted] = useState(false)
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const [animated, setAnimated] = useState(false);

  // Waiting for all images to load. One time effect.
  useEffect(() =>  setMounted(true), [])

  // Changes the image loaded in question
  useEffect(() => setMainImageIndex(mainImageIndex), [mainImageIndex]);
  // function setMainImage() {
  // images.map((image: any, index: any) => {
  //   if(image.is_main_image != 1) {
  //     setMainImageIndex(index);
  //   })
  // }


  // GSAP animations for later.


  // const container = useRef<HTMLElement>(null);
  // const boxRef = useRef<HTMLElement>(null);
  
  // const { contextSafe } = useGSAP({ scope: container });

  

  if (!mounted) {
    return (
      <p className="text-center text-4xl">Loading images...</p>
    )
  } else {
    return (
      <section className='grid grid-cols-2 md:grid-cols-4 gap-2 relative overflow-hidden'>
        {/* <button className="flex col-span-4 order-last bg-orange-500 text-white w-fit p-4 rounded-full" onClick={() => setAnimated(!animated)} ><FaWandMagicSparkles /></button> */}
        {images.map((image: any, index: any) => {
                                  
            if(index != mainImageIndex) {
              return (
                // IF NOT A MAIN IMAGE
                <div key={`img_div_${index}`} id={`img_${index}`} className="relative grow [&>img]:h-full [&>span]:hidden [&>span]:hover:block [&>span]:rounded-b-lg [&>span]:hover:absolute [&>span]:hover:bottom-0 [&>span]:bg-onyx [&>span]:hover:bottom-0 [&>span]:p-1 [&>span]:text-white not-main-image">
                  <Image key={`img_${index}`} className='cursor-pointer rounded-lg md:overflow-mask-vert object-cover max-h-[60px] md:max-h-[156px] overflow-x' onClick={() => setMainImageIndex(index)} src={image.file_path} width={864} height={400} alt={"Test"}/>
                  {/* <span key={`img_span_${index}`} className={`${image.caption ? "" : "hidden"} select-none`}>{image.caption ? image.caption : ""}</span> */}
                </div>
              )
            } else {
              // MAIN IMAGE
              return (
                <div key={`img_div_${index}`} className="relative /md:[&>span]:hidden [&>span]:hover:block [&>span]:hover:absolute [&>span]:hover:bottom-0 [&>span]:bg-onyx dark:[&>span]:bg-black [&>span]:p-2 [&>span]:text-white [&>span]:duration-150 col-span-2 md:col-span-4 order-first [&>button]:opacity-0 [&>button]:duration-100 [&>button]:hover:opacity-100 is-main-image">
                  <Image key={`img_${index}`} className="col-span-4 order-first rounded-t-lg overflow-mask-vert h-[400px] object-cover is-main-image" src={image.file_path} width={864} height={400} alt={"Test"}/>
                  <span key={`img_span_${index}`} className={`absolute bottom-0 w-full md:w-fit select-none ${image.caption ? "" : "hidden"}`}>{image.caption ? image.caption : ""}</span>

                  <button type="button" onClick={() => setMainImageIndex(images[index-1] ? index-1 : images.length-1)} className={`absolute left-0 top-1/2 text-white [&>*]:scale-[3] pl-4 ml-2 [&>*]:rounded-full /[&>*]:bg-blue-500 /[&>*]:dark:bg-orange-500`}><FaAngleLeft /></button>
                  <button type="button" onClick={() => setMainImageIndex(images[index+1] ? index+1 : 0)} className={`absolute right-0 top-1/2 text-white [&>*]:scale-[3] pr-4 mr-2 [&>*]:rounded-full /[&>*]:bg-blue-500 /[&>*]:dark:bg-orange-500`}><FaAngleRight /></button>
                </div>
              )
            }
          })}


      </section>
    )
  }
}