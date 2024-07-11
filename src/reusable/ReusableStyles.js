import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import * as React from "react";

export const stylesModalSmall = {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const stylesModalGroupSupplier = {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const styleNewProduct = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    width: '55%'
};
export const buttonTheme = {
    // backgroundColor: 'success', // Đổi màu nền của button thành màu xanh lá cây #1fa353
    // '&:hover': {
    //     backgroundColor: 'green', // Đổi màu nền khi hover vào button #2e7d32
    //
    // },
    textTransform: 'none'
}
export const radioTheme = {
    '&.Mui-checked': {
        color: 'green',
    }
}
export const gridStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    textTransform: 'none'
}
export const buttonThemeClose = {
    backgroundColor: 'black',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: 'black', // Đổi màu nền khi hover vào button
    }
}
export const boxStyle = {
    display: 'flex',
    alignItems: 'flex-end'

}
export const styleSquare = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '500px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const styleLarge = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
export const InfoOutlinedIconStyle = () => {
    return (
        <InfoOutlinedIcon
            fontSize='small'
            sx={{ color: '#757575' }}
            className={'ms-2'}
        />
    );
};
export const menuItemSx = {
    '&:hover': {
        color: 'white', // Màu chữ khi di chuột vào MenuItem
    },
    color: 'white', // Màu chữ mặc định của MenuItem
};
export const menuSx = {
    '& .MuiPaper-root': {
        backgroundColor: '#1976d2', // Nền màu trắng
        color: 'white', // Chữ màu trắng
    },
};