"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import { Play, Pause, RotateCcw } from "react-feather";

import Card from "@/components/Card";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./CircularColorsDemo.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const COLORS = [
  { label: "red", value: "hsl(348deg 100% 60%)" },
  { label: "yellow", value: "hsl(50deg 100% 55%)" },
  { label: "blue", value: "hsl(235deg 100% 65%)" },
];

function CircularColorsDemo() {
  // TODO: This value should increase by 1 every second:
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [statusRunElapsed, setRunElapsed] = useState("paused");

  const interval = React.useRef(null);
  const id = React.useId();

  const clearTimeout = () => {
    if (!interval.current) return;

    clearInterval(interval.current);
    interval.current = null;
  };

  const runElapsed = () => {
    interval.current = setInterval(() => {
      setTimeElapsed((currentValue) => currentValue + 1);
    }, 700);
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  // TODO: This value should cycle through the colors in the
  function getColor({ timeElapsed }) {
    const colorIndex = timeElapsed % COLORS.length;

    return COLORS[colorIndex];
  }

  // COLORS array:
  const selectedColor = getColor({ timeElapsed });

  const onPlay = () => {
    setRunElapsed("running");
    runElapsed();
  };

  const onPause = () => {
    clearTimeout();
    setRunElapsed("paused");
  };

  const onReset = () => {
    setTimeElapsed(0);
    onPause();
  };

  function getColor({ timeElapsed }) {
    const colorIndex = timeElapsed % COLORS.length;

    return COLORS[colorIndex];
  }

  return (
    <Card as="section" className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;
          const idToUse = `${id}-${color}`;
          return (
            <li
              className={styles.color}
              key={index}
            >
              {isSelected && (
                <motion.div
                  style={{ zIndex: 2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 40 }}
                  layoutId={idToUse}
                  className={styles.selectedColorOutline}
                />
              )}
              <div
                className={clsx(
                  styles.colorBox,
                  isSelected && styles.selectedColorBox
                )}
                style={{
                  backgroundColor: color.value,
                }}
              >
                <VisuallyHidden>{color.label}</VisuallyHidden>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          {statusRunElapsed === "paused" ? (
            <button onClick={onPlay}>
              <Play />
              <VisuallyHidden>Play</VisuallyHidden>
            </button>
          ) : (
            <button onClick={onPause}>
              <Pause />
              <VisuallyHidden>Pause</VisuallyHidden>
            </button>
          )}
          <button onClick={onReset}>
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
