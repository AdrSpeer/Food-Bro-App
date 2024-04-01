import "./ScrollUp.css";
import { useState, useEffect } from "react";

const ScrollUp = () => {
    const [showBtn, setShowBtn] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="scrollUpContainer">
            {showBtn && (
                <svg className="scrollImage" onClick={goToTop} width="72" height="102" viewBox="0 0 72 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_4824_364" maskUnits="userSpaceOnUse" x="4" y="4" width="64" height="96">
                        <path fillRule="evenodd" clipRule="evenodd" d="M67.9251 57.1896L35.7688 4L4 57.1895L26.5271 57.1895L26.5271 100H45.8983L45.8983 57.1895L67.9251 57.1896Z" fill="#C4C4C4" />
                    </mask>
                    <g mask="url(#mask0_4824_364)">
                        <rect width="64" height="1" transform="matrix(1 0 0 -1 4 100)" fill="#ff8a00" />
                    </g>
                    <path
                        d="M35.8062 4L37.5177 2.96528L35.7958 0.117051L34.0892 2.97445L35.8062 4ZM67.9625 57.1896V59.1896H71.5087L69.674 56.1548L67.9625 57.1896ZM4.03735 57.1895L2.32031 56.164L0.513219 59.1895H4.03735L4.03735 57.1895ZM26.5644 57.1895H28.5644V55.1895H26.5644V57.1895ZM26.5644 100H24.5644V102H26.5644V100ZM45.9357 100V102H47.9357V100H45.9357ZM45.9357 57.1895V55.1895H43.9357V57.1895H45.9357ZM34.0947 5.03472L66.2509 58.2243L69.674 56.1548L37.5177 2.96528L34.0947 5.03472ZM5.7544 58.2151L37.5232 5.02555L34.0892 2.97445L2.32031 56.164L5.7544 58.2151ZM26.5644 55.1895L4.03735 55.1895L4.03735 59.1895L26.5644 59.1895V55.1895ZM28.5644 100L28.5644 57.1895H24.5644L24.5644 100H28.5644ZM45.9357 98H26.5644V102H45.9357V98ZM43.9357 57.1895L43.9357 100H47.9357L47.9357 57.1895H43.9357ZM67.9625 55.1896L45.9357 55.1895V59.1895L67.9625 59.1896V55.1896Z"
                        fill="#ff8a00"
                    />
                    <mask id="mask1_4824_364" maskUnits="userSpaceOnUse" x="4" y="4" width="64" height="96">
                        <path fillRule="evenodd" clipRule="evenodd" d="M67.9251 57.1896L35.7688 4L4 57.1895L26.5271 57.1895L26.5271 100H45.8983L45.8983 57.1895L67.9251 57.1896Z" fill="#FFFDFD" />
                    </mask>
                    <g mask="url(#mask1_4824_364)">
                        <rect className="rectFillColor" width="64" height="1" transform="matrix(1 0 0 -1 4 100)" fill="#ff8a00" />
                    </g>
                    <path className="scrollPath" fillRule="evenodd" clipRule="evenodd" d="M67.9624 57.1896L35.8061 4L4.03727 57.1895L26.5644 57.1895L26.5643 100H45.9356L45.9356 57.1895L67.9624 57.1896Z" fill="transparent" />
                    <path
                        d="M35.8061 4L37.5176 2.96528L35.7957 0.117051L34.0891 2.97445L35.8061 4ZM67.9624 57.1896L67.9624 59.1896L71.5086 59.1896L69.6739 56.1548L67.9624 57.1896ZM4.03727 57.1895L2.32022 56.164L0.513133 59.1895L4.03727 59.1895L4.03727 57.1895ZM26.5644 57.1895L28.5644 57.1895L28.5644 55.1895L26.5644 55.1895L26.5644 57.1895ZM26.5643 100L24.5643 100L24.5643 102H26.5643V100ZM45.9356 100V102H47.9356L47.9356 100L45.9356 100ZM45.9356 57.1895L45.9356 55.1895L43.9356 55.1895L43.9356 57.1895L45.9356 57.1895ZM34.0946 5.03472L66.2509 58.2243L69.6739 56.1548L37.5176 2.96528L34.0946 5.03472ZM5.75431 58.2151L37.5232 5.02555L34.0891 2.97445L2.32022 56.164L5.75431 58.2151ZM26.5644 55.1895L4.03727 55.1895L4.03727 59.1895L26.5643 59.1895L26.5644 55.1895ZM28.5643 100L28.5644 57.1895L24.5644 57.1895L24.5643 100L28.5643 100ZM45.9356 98H26.5643V102H45.9356V98ZM43.9356 57.1895L43.9356 100L47.9356 100L47.9356 57.1895L43.9356 57.1895ZM67.9624 55.1896L45.9356 55.1895L45.9356 59.1895L67.9624 59.1896L67.9624 55.1896Z"
                        fill="var(--red)"
                    />
                </svg>
            )}
        </div>
    );
};

export default ScrollUp;
