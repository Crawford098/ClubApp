export default function PrimaryButton({ className = '', disabled, children, ...props }) {

    const btnClass = `inline-flex items-center px-4 py-2 bg-primary-blue border border-transparent rounded-md font-semibold
                text-xs text-white uppercase tracking-widest hover:opacity-90 focus:opacity-90 active:opacity-90 focus:outline-none
                focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && 'opacity-25'} ` + className;
    return (
        <button {...props} className={btnClass} disabled={disabled}>
            {children}
        </button>
    );
}
