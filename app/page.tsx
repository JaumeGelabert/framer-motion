import HeroFeatures from "@/components/Hero/HeroFeatures";
import HeroTitle from "@/components/Hero/HeroTitle";

export default function Home() {
  return (
    <div className="w-full">
      <HeroTitle />
      <div className="relative z-10 w-full overflow-x-clip">
        <HeroFeatures />
      </div>
    </div>
  );
}
