import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {radioTheme} from "./ReusableStyles";
import * as React from "react";

export const ReusableRadioThree = (
    {
        name,
        id,
        labelFirst,
        labelSecond,
        labelThird,
        inputChange,
        onClick
    }) => {
    return (
        <RadioGroup className='mb-3'>
            <FormControlLabel
                name={name}
                id={id}
                value={1}
                onChange={inputChange}
                onClick={onClick}
                control={<Radio sx={radioTheme}/>}
                label={labelFirst}
                labelPlacement="end"
            />
            <FormControlLabel
                name={name}
                id={id}
                value={2}
                onChange={inputChange}
                onClick={onClick}
                control={<Radio sx={radioTheme}/>}
                label={labelSecond}
                labelPlacement="end"
            />
            <FormControlLabel
                name={name}
                id={id}
                value={3}
                onChange={inputChange}
                onClick={onClick}
                control={<Radio sx={radioTheme}/>}
                label={labelThird}
                defaultChecked
                labelPlacement="end"
            />
        </RadioGroup>
    )
}
export const ReusableRadioFour = (
    {
        name,
        id,
        labelFirst,
        labelSecond,
        labelThird,
        labelFour,
        inputChange,
        onClick
    }) => {
    return (
        <RadioGroup className='mb-3'>
            <FormControlLabel
                name={name}
                id={id}
                value={1}
                onChange={inputChange}
                onClick={onClick}
                control={<Radio sx={radioTheme}/>}
                label={labelFirst}
                labelPlacement="end"
            />
            <FormControlLabel
                name={name}
                id={id}
                value={2}
                onChange={inputChange}
                onClick={onClick}
                control={<Radio sx={radioTheme}/>}
                label={labelSecond}
                labelPlacement="end"
            />
            <FormControlLabel
                name={name}
                id={id}
                value={3}
                onChange={inputChange}
                onClick={onClick}
                control={<Radio sx={radioTheme}/>}
                label={labelThird}
                defaultChecked
                labelPlacement="end"
            />
            <FormControlLabel
                name={name}
                id={id}
                value={4}
                onChange={inputChange}
                onClick={onClick}
                control={<Radio sx={radioTheme}/>}
                label={labelFour}
                defaultChecked
                labelPlacement="end"
            />
        </RadioGroup>
    )
}
export const ReusableRadioFive = (
    {
        name,
        id,
        labelFirst,
        labelSecond,
        labelThird,
        labelFour,
        labelFive,
        inputChange,
        onClick
    }) => {
    return (
        <RadioGroup className='mb-3'>
            <FormControlLabel
                name={name}
                id={id}
                value={1}
                onChange={inputChange}
                onClick={onClick}
                control={<Radio sx={radioTheme}/>}
                label={labelFirst}
                labelPlacement="end"
            />
            <FormControlLabel
                name={name}
                id={id}
                value={2}
                onChange={inputChange}
                onClick={onClick}
                control={<Radio sx={radioTheme}/>}
                label={labelSecond}
                labelPlacement="end"
            />
            <FormControlLabel
                name={name}
                id={id}
                value={3}
                onChange={inputChange}
                onClick={onClick}
                control={<Radio sx={radioTheme}/>}
                label={labelThird}
                defaultChecked
                labelPlacement="end"
            />
            <FormControlLabel
                name={name}
                id={id}
                value={4}
                onChange={inputChange}
                onClick={onClick}
                control={<Radio sx={radioTheme}/>}
                label={labelFour}
                defaultChecked
                labelPlacement="end"
            />
            <FormControlLabel
                name={name}
                id={id}
                value={5}
                onChange={inputChange}
                onClick={onClick}
                control={<Radio sx={radioTheme}/>}
                label={labelFive}
                defaultChecked
                labelPlacement="end"
            />
        </RadioGroup>
    )
}