import React from "react";
import { Button, Text } from "react-native";
import { useReduxDispatch, useReduxSelector } from "../../app/store";
import { decrement, increment } from "./counterReducer";

const Counter: React.FC = () => {
    const value = useReduxSelector(state => state.counter);
    const dispatch = useReduxDispatch();

    return (
        <>
            <Text>{value}</Text>
            <Button title="count" onPress={() => dispatch(increment(1))}></Button>
            <Button title="Decrement" onPress={() => dispatch(decrement(1))}></Button>
        </>
    )
};

export default Counter;
