export default function Error({children}) {
    return (
        <div className="text-white border-2 border-red-600 bg-red-400 rounded-md uppercase">
            {children}
        </div>
    )
}
