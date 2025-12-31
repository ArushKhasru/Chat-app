import React from 'react'
import {LoaderIcon} from "lucide-react";

export default function PageLoader() {
  return (
   
        <div className='fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center z-50'>

        <LoaderIcon className='animate-spin size-12 text-indigo-500'/>
    
      
    </div>
  )
}
