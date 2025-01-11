import { motion } from 'framer-motion';

export default function StoreTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-4 py-8"
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <motion.h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 leading-tight">
          My<span className="font-light italic">Dega</span>
        </motion.h2>
        <motion.div
          className="absolute -top-4 -right-4 text-4xl"
          animate={{ rotate: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          🍷
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
