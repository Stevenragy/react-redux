// eslint-disable-next-line no-unused-vars
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const CakeView = () => {
    const numofCakes = useAppSelector((state) => state.cake.numofCakes);
    const dispatch = useAppDispatch();
    return (
        <div>
            <h2>Number of cakes - {numofCakes}</h2>
            <button onClick={() => dispatch(ordered())}> Order cake</button>
            <button onClick={() => dispatch(restocked(20))}> Restock cake</button>
        </div>
    );
};

export default CakeView;
