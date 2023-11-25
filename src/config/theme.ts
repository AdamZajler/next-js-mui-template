import {createTheme} from '@mui/material';
import {colors} from '@/config/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.orange,
        }
    },
    components: {
        MuiButton: {}
    }
});