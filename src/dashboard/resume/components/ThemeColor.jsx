import React, { useContext, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { LayoutGrid } from 'lucide-react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import GlobalApi from './../../../../service/GlobalApi'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

function ThemeColor() {
    const colors = [
        "#FF6B6B", // Coral Red
        "#6BF9B2", // Soft Green
        "#4DA8DA", // Sky Blue
        "#B39CD0", // Lavender
        "#F3D550", // Golden Yellow
        "#40E0D0", // Turquoise
        "#FFABAB", // Peach
        "#000000", // Mint Green
        "#6A0572", // Deep Purple
        "#F8E3B7",  // Warm Beige
        "#8B0000", // Crimson
        "#228B22", // Forest Green
        "#4169E1", // Royal Blue
        "#9932CC", // Dark Orchid
        "#800000", // Maroon
        "#708090", // Slate Gray
        "#483D8B", // Dark Slate Blue
        "#008080", // Teal
        "#FF1493", // Deep Pink
        "#B8860B"  // Dark Goldenrod
    ];


    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const [selectedColor,setSelectedColor]=useState();
    const {resumeId}=useParams();
    const onColorSelect=(color)=>{
        setSelectedColor(color)
        setResumeInfo({
            ...resumeInfo,
            themeColor:color
        });
        const data={
            data:{
                themeColor:color
            }
        }
        GlobalApi.UpdateResumeDetail(resumeId,data).then(resp=>{
            console.log(resp);
            toast('Theme Color Updated')
        })
    }

  return (
    <Popover>
  <PopoverTrigger asChild>
  <Button variant="outline" size="sm" 
          className="flex gap-2" > <LayoutGrid/> Theme</Button>
  </PopoverTrigger>
  <PopoverContent>
    <h2 className='mb-2 text-sm font-bold'>Select Theme Color</h2>
    <div className='grid grid-cols-5 gap-3'>
        {colors.map((item,index)=>(
            <div 
            onClick={()=>onColorSelect(item)}
            className={`h-5 w-5 rounded-full cursor-pointer
             hover:border-black border
             ${selectedColor==item&&'border border-black'}
             `}
            style={{
                background:item
            }}>

            </div>
        ))}
    </div>
  </PopoverContent>
</Popover>
  )
}

export default ThemeColor