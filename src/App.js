import './App.css';
import MyRouters from "./routers/Routers";
import './Custom.css';
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
    const theme = createTheme({
        typography: {
            fontFamily: 'Roboto, sans-serif',
            fontSize: 13,
            htmlFontSize: 16, // Thiết lập kích thước chữ mặc định của HTML là 16px
            body1: {
                fontSize: '0.8125rem', // Tương đương 13px khi kích thước mặc định của HTML là 16px
            },
            body2: {
                fontSize: '0.8125rem', // Tương đương 13px khi kích thước mặc định của HTML là 16px
            },
            caption: {
                fontSize: '0.8125rem', // Tương đương 13px khi kích thước mặc định của HTML là 16px
            },
            subtitle1: {
                fontSize: '0.8125rem', // Tương đương 13px khi kích thước mặc định của HTML là 16px
            },
            subtitle2: {
                fontSize: '0.8125rem', // Tương đương 13px khi kích thước mặc định của HTML là 16px
            },
            button: {
                fontSize: '0.8125rem', // Tương đương 13px khi kích thước mặc định của HTML là 16px
            },
            overline: {
                fontSize: '0.8125rem', // Tương đương 13px khi kích thước mặc định của HTML là 16px
            },
        },
    });
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <MyRouters/>
            </ThemeProvider>
        </div>
    );
}

export default App;