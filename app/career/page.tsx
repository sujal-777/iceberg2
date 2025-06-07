import Expert from "@/components/CarrerSection/Expert";
import Requirement from "@/components/CarrerSection/Requirement";
import JobApplication from "@/components/CarrerSection/Apply"
import { motion } from "framer-motion"

export default function PAGE() {
    return (
        <div className="overflow-hidden">
            {/* <motion.main
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}> */}
            <Expert />
            <Requirement />
            <JobApplication />
    {/* </motion.main> */}
        </div>
    )
}