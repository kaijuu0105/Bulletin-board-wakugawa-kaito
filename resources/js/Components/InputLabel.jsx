export default function InputLabel({ value, className = '', children, ...props }) {
    // console.log(value);
    return (
        <label {...props} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
