import { Faq } from "./Faq";
import { Hero } from "./Hero";
import { useTitle } from "../../hooks/useTitle";
import { Testimonials } from "./Testimonials";
import { FeaturedProducts } from "./components.js/FeaturedProducts";

export const HomePage = () => {
  useTitle("Welcome to Book E-Comm");

  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
