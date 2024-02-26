const ProgressCircle = ({ percent }) => {
    const roundedPercent = Math.round(percent); // Round percent to nearest integer

    const dashArray = Math.PI * 100;
    const dashOffset = Math.PI * (100 - roundedPercent);

    const bar = {
        low: "#db2360",
        medium: "#d2d531",
        high: "#21d07a",
        none: "#d4d4d4"
    };

    const track = {
        low: "#571435",
        medium: "#423d0f",
        high: "#204529",
        none: "#666666"
    };

    const getcolor = (rating) => {
        if (rating >= 70) return "high";
        if (rating >= 40) return "medium";
        if (rating > 0) return "low";
        return "none";
    };

    return (
        <div className="circle">
            <svg width='34px' height='34px' viewBox="0 0 100 100" className="svgcircle">
                <circle
                    cx={'52.5'} cy={'52.5'} r={'50'}
                    fill="transparent"
                    stroke={track[getcolor(percent)]}
                    strokeWidth={6}
                    strokeDasharray={dashArray}
                    className="circleYellowBar" />

                <circle
                    cx={'52.5'} cy={'52.5'} r={'50'}
                    fill="transparent"
                    stroke={bar[getcolor(percent)]}
                    strokeLinecap="round"
                    strokeWidth={6}
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                    className="circleYellowBar" />
            </svg>

            <div className="percentNumber">
                {percent ? <div>{roundedPercent} <span className="percentSymbol">%</span></div> : "NR"}
            </div>
        </div>
    );
};

export default ProgressCircle;
