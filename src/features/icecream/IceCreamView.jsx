// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../icecream/iceCreamSlice";

const IceCreamView = () => {
    const [value, setValue] = useState(1);
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of icecreams - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())} disabled={numOfIcecreams < 1}>
                Order icecream
            </button>
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}></input>
            <button onClick={() => dispatch(restocked(value))}>Restock icecream</button>
        </div>
    );
};

export default IceCreamView;
