import { motion } from "framer-motion";
import logo1 from "../components/assets/iamge3.png";
import logo2 from "../components/assets/iamge4.png";
import logo3 from "../components/assets/image2.png";
import logo4 from "../components/assets/image5.png";
import logo5 from "../components/assets/image6.png";
import logo6 from "../components/assets/medicover.png";


const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,

];

export default function ClientSlider() {
  return (
    <div className="overflow-hidden w-full  py-8">
      <motion.div
        className="flex w-max gap-6 "
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`client-logo-${i}`}
            className="h-20 w-auto object-contain "
          />
        ))}
      </motion.div>
    </div>
  );
}
