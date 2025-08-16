import { motion } from 'framer-motion';
import { UserGroupIcon } from '@heroicons/react/24/outline';

type Props = {
  title: string;
  data: { total: number };
};

export const VisitorCountWidget = ({ title, data }: Props) => (
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.4 }}
    className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4"
  >
    <div className="bg-green-100 p-2 rounded-full">
      <UserGroupIcon className="h-6 w-6 text-green-600" />
    </div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold text-green-600">{data.total}</p>
      <p className="text-sm text-gray-500">visitors</p>
    </div>
  </motion.div>
);