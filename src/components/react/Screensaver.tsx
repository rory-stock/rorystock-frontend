import { useEffect, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import LogoBounce from "./LogoBounce";

export default function Screensaver() {
  const [active, setActive] = useState(false);
  const { reset } = useIdleTimer({
    timeout: 5000,
    onIdle: () => setActive(true),
    onAction: () => setActive(false),
    debounce: 100,
  });

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        reset();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [active, reset]);

  return (
    <div
      className={`fixed inset-0 bg-black flex justify-center ${
        active ? "block" : "hidden"
      }`}
    >
      <LogoBounce />
    </div>
  );
}
