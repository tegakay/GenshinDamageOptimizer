import CardTab from "@/app/_components/CardTab";
import { dbData } from "@/assets/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";



interface DashboardProps {
  children: React.ReactNode;
  params: { uid: string };
}

export default function Layout({ children, params }: DashboardProps) {
  // console.log("params", params.uid);
  const { showcase } = dbData.player;

//   https://enka.network/ui/[ICON_NAME].png
const showcasList = showcase.map((item) => {
    return (
      <Link href={`/u/${params.uid}/${item.characterId}`} key={item.characterId} className="flex flex-col items-center">
        <>
        <Avatar>
          <AvatarImage src={`https://enka.network/ui/${item.assets.icon}.png`} alt={item.name} />
          <AvatarFallback>{item.name}</AvatarFallback>
        </Avatar></>
        
      </Link>
    );
});

  return (
      <section className="flex flex-col items-center gap-4">
      <p>Character Layout</p>
      {children}
      </section>
    );

  
}
