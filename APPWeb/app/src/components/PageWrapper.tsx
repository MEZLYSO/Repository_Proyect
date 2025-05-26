import { motion } from "framer-motion"

function PageWrapper({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.995 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: 'tween',
          duration: 0.30,
          ease: [0.4, 0.0, 0.2, 1]
        }
      }}
      exit={{
        opacity: 0,
        y: -20,
        scale: 0.995,
        transition: {
          type: 'tween',
          duration: 0.2,
          ease: [0.4, 0.0, 1, 1]
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper
