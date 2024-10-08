import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center h-screen w-screen">
        <motion.div layout>
          <motion.button
            layout
            transition={{ ease: "easeInOut" }}
            className="my-10"
            onClick={() => setShow(!show)}
          >
            Click
          </motion.button>
          <AnimatePresence>
            {show && (
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 2, rotate: 360 }}
                exit={{ scale: 0, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                layout
                className="flex items-center justify-center w-10 h-10 bg-green-600 p-8"
              >
                hello
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default App;
