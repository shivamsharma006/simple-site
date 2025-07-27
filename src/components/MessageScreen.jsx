"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function MessageScreen({ onNext, ...motionProps }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const message =
    "My lovely Himanshi babu❤️,When I close my eyes😌✨,all I see is you, betu. Every star✨in the sky feels like it’s celebrating your existence🌟,and every breeze whispers your name to my heart, baccha💕🌬️. You are not just a part of my life —you are my whole world🌎, my reason💖, my everything🌈.No matter where I am or what I do, my heart always finds its way back to you, babu💞.I love you beyond words, beyond time, beyond forever♾️— mine Nancy betu, my one and only-Forever yours💕✨";

  useEffect(() => {
    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + message[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, message]);

  return (
    <motion.div
      {...motionProps}
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <div className="max-w-4xl text-center z-10">
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="">
            <img src="/gifs/writing.gif" alt="writing gif" className="w-48" />
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-950/50 backdrop-blur-md border border-pink-500/10 rounded-3xl p-5 md:p-10 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg md:text-2xl text-white leading-relaxed font-light">
            {displayText}
            {isTyping && (
              <motion.span
                className="inline-block w-0.5 h-6 bg-pink-400 ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              />
            )}
          </p>
        </motion.div>

        {!isTyping && (
          <motion.button
            className="mt-8 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all"
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Our Memories📸
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
