import {
  Navbar,
  Footer,
  Hero,
  Contact,
  About,
  Safety,
  Service,
} from "@/app/ui/home/";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Safety />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
