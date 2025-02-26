// src/pages/Home.tsx
import DefaultLayout from "../layouts/DefaultLayout";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 0.3, duration: 0.3 }}
  >
    <DefaultLayout>
      <h1>홈페이지</h1>
      <p>내용임</p>
    </DefaultLayout>
  </motion.div>
);

export default Home;
