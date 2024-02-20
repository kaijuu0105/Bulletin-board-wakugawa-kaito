import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ subCategories, className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();
    console.log(subCategories);

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
            {subCategories.map(subCategory => (
                <option 
                    value={subCategory.id} key={subCategory.id} >
                    {subCategory.sub_category}
                </option>
            ))};
        </select>
        
    );
});
