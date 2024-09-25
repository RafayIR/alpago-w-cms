import { Halvar } from '../font';
import { getBlogsData } from '../_fetchData/index'


export const metadata = {
    title: "Blogs",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${Halvar.className}`}>{children}</body>
        </html>
    );
}
