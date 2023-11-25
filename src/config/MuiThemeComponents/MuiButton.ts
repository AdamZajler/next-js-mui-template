import {Components} from '@mui/material/styles/components';
import {theme} from '@/config/theme';

type Theme = typeof theme;

export const MuiButton: Components<Theme>['MuiButton'] = {
    defaultProps: {
        disableElevation: true,
    },

    styleOverrides: {},

    variants: [],
};
