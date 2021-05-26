import {
    memo,
    useState,
    useEffect
} from 'react';

const RangeInput = memo(
    ({classes, label, label2, onChange, value, ...sliderProps}) => {
        const [sliderVal, setSliderVal] = useState(0);
        const [mouseState, setMouseState] = useState(null);

        useEffect(() => {
            setSliderVal(value);
        }, [value]);

        const changeCallback = e => {
            setSliderVal(e.target.value);
        };

        useEffect(() => {
            if (mouseState === "up") {
                onChange(sliderVal);
            }
        }, [mouseState]);

        return (
            <div className="range-slider">
                <p>{label}</p>
                <p>{label2}: {sliderVal}</p>
                <input
                    type="range"
                    value={sliderVal}
                    {...sliderProps}
                    className={`slider ${classes}`}
                    id="myRange"
                    onChange={changeCallback}
                    onMouseDown={() => setMouseState("down")}
                    onMouseUp={() => setMouseState("up")}
                />
            </div>
        );
    }
);

export default RangeInput;