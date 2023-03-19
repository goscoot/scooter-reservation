import { Hero } from "./Hero";
import { Featured } from "./Featured";

export function Home() {
  return (
    <div className="home">
      <Hero />
      <Featured />
    </div>
  );
}
