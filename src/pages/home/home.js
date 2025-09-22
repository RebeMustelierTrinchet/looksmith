import styles from "./home.module.css"
import Hero from "../../component/hero/hero";
import Features from "../../component/benefit/benefit";
import Text from "../../component/home_text/home_text";
import Testimonials from "../../component/testimonials/testimonials";
import Services from "../../component/services/services";
import Action from "../../component/action/action";
import AboutUs from "../../component/Abaout_Us/abaut_us";
import Coverage from "../../component/coverage/coverege";
import Benefits from "../../component/Benefits/Benefits";
import QuickTipsCarousel from "../../component/tips/tips";
import CallButton from "../../component/call/call";
import Politics from "../../component/politics/politics";

export default function Home() {
  return (
    
      <div className={styles.container}>
        <CallButton/>
        <Hero/>
        <Services/>
        <Features/>
        <Benefits/>
        
        <Text/>
        
        <Testimonials/>
        <Coverage/>
        
        <Action/>
        <AboutUs/>
        <Politics/>
        <QuickTipsCarousel/>
        
      </div>
  );
}
