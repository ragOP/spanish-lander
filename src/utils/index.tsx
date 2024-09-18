import { animateScroll } from "../components/animationScroll";

const getElementPosition = (element: any) => element.offsetTop;

export const scrollTo = ({ id, ref = null, duration = 1500, scrollOffset = 100 }: any) => {
    // the position of the scroll bar before the user clicks the button
    const initialPosition = window.scrollY;

    // if the reference is id
    if (id) {
        const element = document.getElementById(id);

        if (!element) {
            // log error if the reference passed is invalid
            return;
        }

        // targetPosition includes an offset, so it doesn't scroll too far to the top
        const targetPosition = getElementPosition(element) - scrollOffset;

        animateScroll({
            targetPosition,
            initialPosition,
            duration
        });
    }
};
