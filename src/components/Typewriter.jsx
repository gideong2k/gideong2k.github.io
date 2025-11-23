import { useEffect, useState } from "react";

export default function Typewriter({ words = [], speed = 120, delay = 1500 }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex(prev => prev + 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, speed, delay]);

  return (
    <span className="text-blue-400 font-semibold">
      {text}
      <span className="border-r-2 border-blue-400 ml-1 animate-pulse"></span>
    </span>
  );
}
