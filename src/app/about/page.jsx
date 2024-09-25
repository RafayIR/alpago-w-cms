
import About from '../../page/aboutpage';
import Provider from '../_provider/provider';
import { getAboutData } from '../_fetchData/index'



const AboutPage = async () => {

    const data = await getAboutData()

    return (
        <>
            <Provider>
                <About data={data} />
            </Provider>
        </>
    )
}


export default AboutPage