import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { RouterProvider } from 'react-router-dom';

// Import router
import { Router } from './Route/route';

import 'dayjs/locale/th';

// MUI
import { Box, CssBaseline } from '@mui/material';

// Import utility and theme
import { getSystemLang } from './utils/getSystemLang'; // แก้ไขเส้นทางตามตำแหน่งจริง
import { theme } from './styles/theme'; // แก้ไขเส้นทางตามตำแหน่งจริง

const MainContainer = () => {
    const locale = getSystemLang().toLowerCase();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
                <div className="application">
                     <meta charSet="utf-8" />
                     <title>NSS Support</title>
                    <RouterProvider router={Router} />
                </div>
            </LocalizationProvider>
        </ThemeProvider>
    );
};

export default MainContainer;
