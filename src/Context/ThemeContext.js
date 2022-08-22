import { createContext, useReducer } from 'react';
import { TOGGLE_THEME } from './ActionTypes';
import { themeReducer } from './Reducer/ThemeReducer';

export const themeContext = createContext();

const initval = {
    theme:'light'
}

const ToggleContext = ({ children }) => {

    const [state, dispatch] = useReducer(themeReducer, initval);
    
    const toggle_theme = (val) => {
        let newTheme = val === 'light' ? 'dark' : 'light';
        dispatch({type:TOGGLE_THEME, payload:newTheme})

    }

    return(
        <themeContext.Provider
        value = {{
            ...state,
            toggle_theme
        }}
        >
        { children }
        </themeContext.Provider>
    )
}

export default ToggleContext;