import CTA from "./components/CTA";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Products></Products>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <CTA></CTA>
    </>
  );
}
