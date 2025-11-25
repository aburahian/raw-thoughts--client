import Banner from "@/Component/Banner";
import TrendingNow from "@/Component/TrendingNow";
import MustSeeMedia from "@/Component/MustSeeMedia";
import RapidReads from "@/Component/RapidReads";

export default function Home() {
  return (
    <div className="my-14 space-y-14 ">
      <Banner></Banner>
      <TrendingNow></TrendingNow>
      <MustSeeMedia></MustSeeMedia>
      <RapidReads></RapidReads>
    </div>
  );
}
