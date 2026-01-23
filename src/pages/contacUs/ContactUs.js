import styles from "./ContacUs.module.css"
import Hero from "../../component/hero/hero";
import CallButton from "../../component/call/call";
import ContactForm from "../../component/contact-form/contact-form";
import Coverage from "../../component/coverage/coverege";
import ContactInfo from "../../component/contac_info/contact_info";
import Action from "../../component/action/action";

export default function ContacUs() {
  return (
    
      <div className={styles.container}>
        <CallButton/>
        <Hero/>
        {/* <ContactForm/> */}
        <ContactInfo/>
       
        
      </div>
  );
}
