import Provider from '../_provider/provider';
import News from '../../page/newspage';
import { getNewLandingdata } from '../_fetchData';



const NewsPage = async ({ searchParams }) => {

    const data = await getNewLandingdata(searchParams)



    return (
        <>
            <Provider>
                <News data={data} />
            </Provider>
        </>
    )
}

export default NewsPage;