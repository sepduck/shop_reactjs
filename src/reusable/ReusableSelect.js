import {FormControl, MenuItem, Select} from "@mui/material";
import * as React from "react";
import AddIcon from '@mui/icons-material/Add';


export const ReusableFormSelect = (
    {
        id,
        name,
        key,
        value,
        inputChange,
        onClick,
        options,
        optionValueField,
        optionLabelField,
        handleOpen
    }) => {
    return (
        <FormControl variant="filled" fullWidth>
            <Select
                fullWidth
                id={id}
                name={name}
                key={key}
                value={value}
                onChange={inputChange}
                onClick={onClick}
                variant={"standard"}
                color='success'
                endAdornment={
                    <AddIcon onClick={handleOpen}/>
                }
            >{options.map((option) => (
                <MenuItem key={option[optionValueField]}
                          value={option[optionValueField]}
                >
                    {option[optionLabelField]}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
    )
}
export const ReusableSelect = (
    {
        id,
        name,
        key,
        value,
        inputChange,
        onClick,
        options,
        optionValueField,
        optionLabelField,
    }) => {
    return (
        <Select
            fullWidth
            id={id}
            name={name}
            key={key}
            value={value}
            onChange={inputChange}
            onClick={onClick}
            variant={"standard"}
            color='success'
            defaultValue={value}
        >{options.map((option) => (
            <MenuItem key={option[optionValueField]}
                      value={option[optionValueField]}
            >
                {option[optionLabelField]}
            </MenuItem>
        ))}
        </Select>
    )
}
