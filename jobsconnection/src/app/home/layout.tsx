import Header from "@/components/Header";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header />
            <div className="pt-24">
                {children}
            </div>
        </div>
    )
}