import Header from "@/components/Header/Index"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header/>
            <div>
                {children}
            </div>
        </div>
    )
}