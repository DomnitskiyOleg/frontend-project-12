import { useLayoutEffect, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const NotFound = () => {
    const component = useRef();
    const header = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(header.current, {
                duration: 1.2,
                text: "PAGE NOT FOUND",
            });

        }, component);// <- Scope!

        return () => ctx.revert();
    }, []);

    return (
        <div ref={component}>
            <h1 className="header" ref={header}> </h1>
        </div>
    );
}

export default NotFound;