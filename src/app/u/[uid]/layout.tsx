import CardTab from "@/app/_components/CardTab";
import { dbData } from "@/assets/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Wrapper } from "enkanetwork.js";

interface DashboardProps {
  children: React.ReactNode;
  params: { uid: string };
}

const getData = async (uid: string) => {
  console.log("dai", uid);
  const { genshin } = new Wrapper();
  try {
    let userdata = await genshin.getPlayer(uid);

    // console.log("meow", userdata);
    return userdata["player"];
  } catch (error) {
    return error;
  }
};

export default async function Layout({ children, params }: DashboardProps) {
  const { uid } = params;
  console.log("whats uid", uid);
  // const { showcase } = dbData.player;
  const playerData = await getData(uid);

  if (!playerData) {
    return <div>Error loading player data</div>;
  }
  const { showcase, username, levels, signature } = playerData;
  // console.log("dandandan", showcase);

  // const { genshin } = new Wrapper({
  //   cache: true,
  // });

  // let userdata = await genshin.getPlayer(uid);
  // console.log("more checks", userdata);
  // const showcase = await userdata['player']['showcase'];

  const showcasList = showcase.map((item) => {
    return (
      <div key={item.characterId} className="flex flex-col items-center">
        <Link href={`/u/${params.uid}/${item.characterId}`}>
          <Avatar>
            <AvatarImage
              src={`https://enka.network/ui/${item.assets.icon}.png`}
              alt={item.name}
            />
            <AvatarFallback>{item.name}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    );
  });

  return (
    <section className="flex flex-col items-center gap-4">
      <div className="flex flex-row justify-between items-center">
        <CardTab
          username={username}
          level={levels.world}
          rank={levels.rank}
          signature={signature}
        />
      </div>
      <div className="flex flex-row justify-between items-center py-4 gap-4">
        {showcasList}
      </div>
      {children}
    </section>
  );
}
