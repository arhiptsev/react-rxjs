import React, { useContext } from 'react';

import { TextField } from "@material-ui/core";
import { RxContext } from "../common/state";

export const Search = () => {

    const { searchObservable } = useContext(RxContext);

    let input: HTMLInputElement;

    return <TextField
        id="outlined-search"
        label="Search field"
        inputRef={ref => { input = ref; }}
        onInput={() => searchObservable.next(input.value)}
        type="search"
        variant="outlined"
    />
}
