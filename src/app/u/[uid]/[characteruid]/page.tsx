import { CharacterAsset } from "@/app/_components/CharacterAsset";
import { dbData } from "@/assets/db";
import { Wrapper } from "enkanetwork.js";

const getData = async (uid: string) => {
  console.log("dai", uid);
  const { genshin } = new Wrapper({
      cache: true,
    });
  try {
    let userdata = await genshin.getPlayer(uid);

    // console.log("meow", userdata);
    return userdata["player"];
  } catch (error) {
    return error;
  }
};

export default async function characterStats({
  params,
}: {
  params: Promise<{ uid: string,characteruid:string }>;
}) {
  
  const {uid,characteruid} = params
  
  
 
  // let sc = dbData.player.showcase
  let scd = await getData(uid)
  let sc = scd.showcase
  console.log('staight',sc)
  let filteredshowcase = sc.filter(uxd => uxd.characterId == characteruid)
  console.log('zzz', filteredshowcase)

  let dt = filteredshowcase[0]['level']
  let art = filteredshowcase[0].assets.gachaIcon
  let name = filteredshowcase[0].name
  
  return (
    <div>
      <p>Character Stats</p>
      <CharacterAsset art={art} name={name}/>
    </div>
  );
}
