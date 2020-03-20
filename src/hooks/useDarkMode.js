import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useDarkMode(key, initialValues, cb) {
    const [values, setValues] = useLocalStorage(key, initialValues);

    useEffect() {
        if(window.document) {

        } else {
            
        }
    }
    
    return [values];
}