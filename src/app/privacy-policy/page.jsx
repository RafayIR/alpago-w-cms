import Provider from '../_provider/provider';
import PrivacyPolicy from '../../page/privacypage';
// import { getNewLandingdata } from '../_fetchData';



const NewsPage = async ({ searchParams }) => {

    // const data = await getNewLandingdata(searchParams)



    return (
        <>
            <Provider>
                <PrivacyPolicy />
            </Provider>
        </>
    )
}

export default NewsPage;