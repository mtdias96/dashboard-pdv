import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Wine } from 'lucide-react';

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
          animate={{ rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🍷
        </motion.div>
      </motion.div>

      <motion.p
        className="text-xl text-gray-600 tracking-wide text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Gerencie sua adega com estilo e precisão
      </motion.p>

      <motion.div
        className="flex justify-center items-center gap-8 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center"
        >
          <Wine className="w-8 h-8 text-purple-600" />
          <span className="text-sm text-gray-600 mt-1">Estoque</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center"
        >
          <DollarSign className="w-8 h-8 text-green-600" />
          <span className="text-sm text-gray-600 mt-1">Vendas</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center"
        >
          <TrendingUp className="w-8 h-8 text-yellow-600" />
          <span className="text-sm text-gray-600 mt-1">Sucesso</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
