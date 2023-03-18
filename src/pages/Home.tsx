import { Featured } from "./Featured";
import { Hero } from "./Hero";

export function Home() {
  return (
    <div className="home">
      <Hero />
      <Featured />
    </div>
  );
}
