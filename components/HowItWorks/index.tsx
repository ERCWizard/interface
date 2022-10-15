import { motion } from 'framer-motion'

const HowItWorks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeIn', duration: 1 }}
      className="max-w-[1280px] mx-auto flex flex-col items-center justify-center mt-24"
    >
      <div className="flex flex-col items-center w-full gap-16 my-8">
        <div className="flex-1 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-medium font-Poppins">How it works</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 gap-x-8 w-full uppercase text-center">
          <div className="p-4 bg-text border border-neutral-900 space-y-4">
            <div className="border w-8 h-8 flex items-center justify-center m-auto">1</div>
            <div>Connect your wallet</div>
          </div>
          <div className="p-4 bg-text border border-neutral-900 space-y-4">
            <div className="border w-8 h-8 flex items-center justify-center m-auto">2</div>
            <div>Select the contract</div>
          </div>
          <div className="p-4 bg-text border border-neutral-900 space-y-4">
            <div className="border w-8 h-8 flex items-center justify-center m-auto">3</div>
            <div>Fill in the details</div>
          </div>
          <div className="p-4 bg-text border border-neutral-900 space-y-4">
            <div className="border w-8 h-8 flex items-center justify-center m-auto">4</div>
            <div>Deploy the contract</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default HowItWorks
