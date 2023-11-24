"use client"
import { useEffect,useState } from "react"
export default function(){
  let [a,setA] = useState([5])
  //setTimeout(()=>setA([6]),500)
  useEffect(()=>{
    console.log(a)
  },[a])
  return
}