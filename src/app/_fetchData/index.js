import { unstable_noStore } from "next/cache"


export const getHomePageData = async () => {
    unstable_noStore()
    const resp = await fetch('https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/page/home', {

    }).then((resp) => resp.json()).catch((err) => console.log(err))

    return resp
}

export const getAboutData = async () => {
    unstable_noStore()
    const resp = await fetch('https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/page/about-us', {
    }).then((resp) => resp.json()).catch((err) => console.log(err))

    return resp
}


export const getContactData = async () => {
    unstable_noStore()
    const resp = await fetch('https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/page/contact-us', {
    }).then((resp) => resp.json()).catch((err) => console.log(err))

    return resp
}

export const getProjectData = async (params) => {
    unstable_noStore()
    const resp = await fetch(`https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/get_project/${params}`, {
    }).then((resp) => resp.json()).catch((err) => console.log(err))
    return resp
}


export const getExpertiseData = async () => {
    unstable_noStore()
    const resp = await fetch('https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/page/expertise', {
    }).then((resp) => resp.json()).catch((err) => console.log(err))

    return resp
}


export const getBlogsData = async (searchParams) => {
    unstable_noStore()
    const resp = await fetch(`https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/get_blogs?page=${searchParams.page}`, {
    }).then((resp) => resp.json()).catch((err) => console.log(err))

    return resp
}



export const getBlogdata = async (params) => {
    unstable_noStore()
    const resp = await fetch(`https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/blog_by_id/${params}`, {
    }).then((resp) => resp.json()).catch((err) => console.log(err))

    return resp
}


export const getNewsDetail = async (params) => {
    unstable_noStore()
    const resp = await fetch(`https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/news_by_id/${params}`, {
    }).then((resp) => resp.json()).catch((err) => console.log(err))

    return resp
}

export const getNewLandingdata = async (searchParams) => {
    unstable_noStore()
    const resp = await fetch(`https://digitalgraphiks.co.uk/demo/alpago-properties-cms/api/get_news?page=${searchParams.page}`, {
    }).then((resp) => resp.json()).catch((err) => console.log(err))

    return resp
}
