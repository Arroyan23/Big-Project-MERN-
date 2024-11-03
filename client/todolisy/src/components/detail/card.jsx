// halaman untuk konfigurasi
import "../../style/animation.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "./usefollow";
import "../../style/webkit.css";

export const Card = ({ poster, nama, email, phone, city }) => {
  const ref = useRef();
  const { x, y } = useFollowPointer(ref);
  return (
    <>
      <motion.div
        className="flex dark:text-white space-x-8 dark:bg-slate-700 
      max-w-lg p-5 rounded-xl shadow-lg shadow-slate-200 dark:shadow-slate-900"
        initial={{ opacity: 0, scale: 0.65 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 8,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <div className="">
          <img
            src={poster}
            alt=""
            className="h-32 w-32 rounded-lg object-cover"
          />
        </div>
        <div className="">
          <p>Nama: {nama}</p>
          <h2>Email: {email}</h2>
          <h2>Phone: {phone}</h2>
          <p>City: {city}</p>
        </div>
      </motion.div>
    </>
  );
};
