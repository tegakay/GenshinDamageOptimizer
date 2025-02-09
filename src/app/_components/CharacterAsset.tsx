import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AssetFinder } from "enkanetwork.js"



export async function CharacterAsset({art,name}:{art:String,name:String}) {
   let url =`https://enka.network/ui/${art}.png`
  return (
    <Card className="w-[550px] flex justify-between h-[350px]">
      <div className="  w-full inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${url})` }}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Here lies our characetr</CardDescription>
      </CardHeader>
      <CardContent>
       
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Damage Calculator</Button>
        
      </CardFooter>
      </div>
    </Card>
  )
}
