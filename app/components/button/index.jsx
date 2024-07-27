export function Button({ children, className }) {
    return (
        <button className={`bg-purple ${className} text-white px-8 py-3 rounded-xl hover:bg-dark-purple transition-colors uppercase`}>
            {children}
        </button>
    )
}
