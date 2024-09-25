import { Halvar } from '../font';
import { getAboutData } from '../_fetchData/index'


export const generateMetadata = async () => {
    let metadata = await getAboutData()


    return {
        title: metadata?.data?.meta_title || "About Us",
        description: metadata?.data?.meta_description || "About Us",
    }
}



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${Halvar.className}`}>{children}</body>
        </html>
    );
}
