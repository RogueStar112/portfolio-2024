"use client";
import { useState } from "react";

export default function ProjectDetails(index: any) {

  const [isDisplayed, setIsDisplayed] = useState(false);

  if (isDisplayed) {
    return ( 
      
      <div className="absolute bg-black opacity-80">

      </div>

    )
  }

}