import { Halvar } from '../font';
import { getContactData } from "../_fetchData";


export const generateMetadata = async () => {
    let metadata = await getContactData()


    return {
        title: metadata?.data?.meta_title || "Contact Us",
        description: metadata?.data?.meta_description || "Contact Us",
    }
}


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${Halvar.className}`}>{children}</body>
        </html>
    );
}
