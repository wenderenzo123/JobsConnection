import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <head />
            <body>
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}