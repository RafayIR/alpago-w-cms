import { Halvar } from '../font';


export const metadata = {
    title: "Contact",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${Halvar.className}`}>{children}</body>
        </html>
    );
}
