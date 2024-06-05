interface HeaderProps{
    label: string;
}

export const Header = ({ label}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center">
            <h1 className="text-3xl font-bold">Auth</h1>
            <p className="text-gray-400">{label} </p>
        </div>
    )
}