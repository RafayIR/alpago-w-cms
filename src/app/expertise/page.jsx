import Expertise from '../../page/expertisepage';
import Provider from '../_provider/provider';
import { getExpertiseData } from '../_fetchData';




const DetailPage = async () => {
    const data = await getExpertiseData()
    return (
        <>
            <Provider>
                <Expertise data={data} />
            </Provider>
        </>
    )
}


export default DetailPage