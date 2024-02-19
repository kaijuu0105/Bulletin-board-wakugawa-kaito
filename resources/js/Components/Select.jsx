import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ mainCategories, className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();
    console.log(mainCategories);

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        >
            <option value="none">----</option>
            {mainCategories.map(mainCategory => (
                <option 
                    value={mainCategory.id} key={mainCategory.id} >
                    {mainCategory.main_category}
                </option>
            ))};
        </select>
        
    );
});
