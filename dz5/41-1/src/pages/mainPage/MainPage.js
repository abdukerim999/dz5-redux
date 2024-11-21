import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInputAction, changeTitle, changeTitleWithParams, clearInput, deleteTitle } from "../../store/titleSlice";

const MainPage = () => {

    const dispatch = useDispatch()
    const { title, inputValue } = useSelector(state => state.titleReducer)

    // const changeTitleFunc = () => {
    //     dispatch(changeTitle())
    // }

    const changeTitleWithParamsFunc = () => {
        dispatch(changeTitleWithParams(inputValue))
    }

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    return (
        <div>
            <h1>{title}</h1>
            <input value={inputValue} type="text" onChange={changeInput}/>
            <button onClick={() => dispatch(clearInput())}>clear</button>
            <button onClick={changeTitleWithParamsFunc}>add</button>
            <button onClick={() => dispatch(deleteTitle())}>delete title</button>

            {/* <button onClick={changeTitleFunc}>change title</button>
            <button onClick={changeTitleWithParamsFunc}>change title with params</button> */}
        </div>
    )
}

export default MainPage;