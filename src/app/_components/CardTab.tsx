import { BellRing, Check } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


// type CardProps = React.ComponentProps<typeof Card>

type CardProps = {
  username?: string;
  level: number;
  rank: number;
  signature: string;
}

export default function CardTab ({username,level,rank,signature}:CardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{username}</CardTitle>
        <CardDescription>World level: {level}</CardDescription>
        <CardDescription>Adventure Rank: {rank}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Signature:{signature}</p>
      </CardContent>
    </Card>
    
  );
}
