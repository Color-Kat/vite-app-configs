import { testActions } from "@/store/test/test.slice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux"

const actions = {
    ...testActions
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
}