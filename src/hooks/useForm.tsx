import { useState } from 'react';

export const useForm = <T extends Object>( initState: T ) => {
    
    const [state, setState] = useState( initState );

    const onChange = <K extends Object>( value: K, field: keyof T ) => {    // K es el tipo que se mande por parametro. (booleano, string, object, etc.)
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        form: state,
        onChange,
    }

}