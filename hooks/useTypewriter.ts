'use client';
import { useState, useEffect, useRef } from 'react';

export function useTypewriter(
  words: string[],
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseMs = 2200,
) {
  const [display, setDisplay]     = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting]   = useState(false);
  const pauseRef = useRef(false);

  useEffect(() => {
    if (pauseRef.current) return;

    const current = words[wordIndex];

    if (!deleting && display === current) {
      pauseRef.current = true;
      const t = setTimeout(() => {
        pauseRef.current = false;
        setDeleting(true);
      }, pauseMs);
      return () => clearTimeout(t);
    }

    const timeout = setTimeout(() => {
      if (deleting) {
        setDisplay(prev => prev.slice(0, -1));
        if (display.length <= 1) {
          setDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
        }
      } else {
        setDisplay(current.slice(0, display.length + 1));
      }
    }, deleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [display, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return display;
}