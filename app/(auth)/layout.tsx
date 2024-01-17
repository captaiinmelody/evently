const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="flex-center h-screen">
            {children}
        </div>
    )
}

export default Layout;