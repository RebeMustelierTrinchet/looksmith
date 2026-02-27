import Accordion from 'react-bootstrap/Accordion';
import styles from "./faq.module.css"
import Hero from '../../component/hero/hero';

function F_A_Q() {
    const faqs = [
  {
    question: "What does locksmith mean?",
    answer: "A locksmith is a skilled professional who works with locks and security systems. Our technicians have expertise in lock mechanisms, key cutting, and security solutions.",
  },
  {
    question: "What is locksmith services?",
    answer: "Locksmith services encompass a wide range of tasks, including lock installation, repair, and replacement, key cutting, and emergency lockout assistance, along with security solutions.",
  },
  {
    question: "What does locksmith usually do?",
    answer: "Our skilled technicians typically install, repair, and replace locks, cut keys, and provide emergency lockout services. We also offer security assessments and advice.",
  },
  {
    question: "When did locksmith come out?",
    answer: "The exact origin of locksmithing is unclear, but it dates back centuries. Ancient civilizations relied on locksmiths to secure homes, businesses, and valuable possessions.",
  },
  {
    question: "Where did locksmith originate?",
    answer: "The exact origins of locksmithing are unclear, but it’s believed to have originated in ancient civilizations. Early locksmiths used basic tools to create and repair locks.",
  },
  {
    question: "How locksmith open door?",
    answer: "Our technicians use various techniques to open doors, including picking, drilling, or using specialized tools. The specific method depends on the type of lock and the level of security.",
  },
  {
    question: "Can locksmith change locks?",
    answer: "Yes, we can replace or rekey locks on doors and other entry points. This is a common service to enhance security or to replace damaged locks.",
  },
  {
    question: "Can locksmith cut car keys?",
    answer: "Yes, we can cut car keys to fit specific locks. We use specialized key-cutting machines to ensure precision and accuracy.",
  },
  {
    question: "Can locksmith make ignition key?",
    answer: "Yes, we can make ignition keys for cars and other vehicles. We can either create a new key based on the vehicle’s lock or program a replacement key.",
  },
  {
    question: "Can locksmith make key fob?",
    answer: "Yes, we can make new key fobs based on the original key or code. We can also program the new fob to work with your specific vehicle or device.",
  },
  {
    question: "Can locksmith make key from lock?",
    answer: "Yes, we can create a new key from an existing lock. This process involves analyzing the lock’s internal mechanism to determine the correct key profile.",
  },
  {
    question: "Can locksmith open house door?",
    answer: "Yes, we can open locked doors using various techniques, such as picking, drilling, or using specialized tools.",
  },
  {
    question: "Can locksmith program key fob?",
    answer: "Yes, we can program key fobs for cars and other devices. We have the necessary tools and software to complete this task efficiently.",
  },
  {
    question: "Can locksmith replace car key?",
    answer: "Yes, we can replace lost or damaged car keys. This may involve cutting a new key and programming it to work with the vehicle’s ignition system.",
  },
  {
    question: "Can locksmith replace key fob?",
    answer: "Yes, we can replace lost or damaged key fobs. We also program a new fob or provide a replacement from the original manufacturer.",
  },
  {
    question: "Can locksmith unlock my car?",
    answer: "Yes, we can unlock cars using various techniques, including specialized tools and methods. We can also replace lost or damaged car keys.",
  },
  {
    question: "Can locksmith pick locks?",
    answer: "Yes, we can pick locks, but this may not always be necessary. Picking locks is often used as a last resort or for training purposes.",
  },
  {
    question: "Where is locksmith located?",
    answer: "Locksmiths are located in various places, including standalone shops, mobile services, and hardware stores. You can find a locksmith near you by searching online or checking local directories, or just give us a call and we drive to you.",
  },
  {
    question: "Where is locksmith near me?",
    answer: "You can find a locksmith near you by using online search engines or local directories. Look for locksmiths with positive reviews and experience in your specific needs, or call us now and we’d be happy to help.",
  },
  {
    question: "Which work is locksmith?",
    answer: "Locksmithing is a skilled trade that involves working with locks and security systems. Locksmiths have expertise in lock mechanisms, key cutting, and security solutions.",
  },
  {
    question: "Are locksmith services 24 7?",
    answer: "Many locksmith services operate 24/7 to accommodate emergency lockouts and security needs. This ensures immediate assistance, especially during late-night or early morning hours. However our business hours changes seasonally, please check our main page for current business hours.",
  },
  {
    question: "Is locksmith in demand?",
    answer: "Yes, locksmiths are consistently in high demand, particularly for emergency services. Their expertise is crucial for securing homes, businesses, and vehicles.",
  },
  {
    question: "When to call locksmith?",
    answer: "Call us when you’re locked out of your home, car, or business, or when you need lock repair or replacement.",
  },
  {
    question: "How much does a locksmith service cost?",
    answer: "The cost of locksmith services can vary based on factors like location, time of day, and the complexity of the job. Emergency calls, especially during late nights or weekends, may incur higher fees.",
  },
  {
    question: "How to become a locksmith?",
    answer: "To become a locksmith, you may need specific training and licensing, depending on your location. Many locksmiths learn through apprenticeships or vocational training programs.",
  },
  {
    question: "Which states require locksmith license?",
    answer: "Licensing requirements for locksmiths vary by state. Some states — includes Texas — require specific licenses, while others may not. It’s important to check with your local licensing board to determine the specific requirements in your area.",
  },
  {
    question: "Is locksmith expensive?",
    answer: "The cost of locksmith services can vary depending on factors like the complexity of the job, time of day, and location. Emergency services, especially during late-nights or weekends, may incur higher fees.",
  },
  
];

  return (
    <div>
        <Hero/>
    <Accordion className={styles.accordion}>
        {faqs.map((faq,index)=>(
      <Accordion.Item className={styles.accordion_item} eventKey={index}>
        <Accordion.Header className={styles.accordion_header}>{faq.question}</Accordion.Header>
        <Accordion.Body className={styles.accordion_body}>
          {faq.answer}
        </Accordion.Body>
      </Accordion.Item>
      ))}
      
    </Accordion>
    </div>
  );
}

export default F_A_Q;