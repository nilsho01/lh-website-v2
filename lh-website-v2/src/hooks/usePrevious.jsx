import { useState } from "react";

const usePrevious = (value) => {
    const [state, setState] = useState({ current: value, previous: undefined });

    if (state.current !== value) {
        setState({ current: value, previous: state.current });
        return state.current;
    }

    return state.previous;
};

export default usePrevious;
