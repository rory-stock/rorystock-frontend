import { Fade as Hamburger } from "hamburger-react";
import { type Dispatch, type SetStateAction } from "react";

type HamburgerButtonProps = {
    isOpen: boolean | undefined,
    setOpen: Dispatch<SetStateAction<boolean>> | undefined
}

export default function HamburgerButton({isOpen, setOpen}: HamburgerButtonProps) {
    return (
        <div className={"pr-3 md:pr-4 lg:hidden"}>
            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                direction={"left"}
                size={38}
            />
        </div>
    );
}