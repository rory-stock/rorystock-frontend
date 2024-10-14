import { useState } from "react";
import { createPortal } from "react-dom";
import Hamburger from "../../react/Hamburger";
import MobileMenu from "./MobileMenu";

export default function MobileNav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger isOpen={isOpen} setOpen={setOpen} />
      {createPortal(
        <MobileMenu isOpen={isOpen} setOpen={setOpen} />,
        document.body
      )}
    </>
  );
}
