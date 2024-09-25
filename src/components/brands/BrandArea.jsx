"use client";
import React from 'react';
import Image from "next/image";
import { StadMitte } from '../../app/font';
import { useData } from '../../hooks/useGetData';


const BrandArea = () => {

    const data = useData()
    const brands = data?.data?.content?.brand?.brandLogo
    const brandTitle = data?.data?.content?.brand?.title
    // Split the URLs and wrap each in quotes
    const urlArray = brands[0]?.split(',').map(url => `${url}`);

    return (
        <>
            <div className={`al-brand-area`}>
                <div className='company-title'>
                    <h2 className={`${StadMitte.className}`}>{brandTitle}</h2>
                </div>
                <div className="p-0 container-fluid">
                    <div className="tp-brand-wrap theme-bg">
                        <div className="grid">
                            {
                                urlArray.map((item, i) => (
                                    <div className='grid-items' key={i}>
                                        <div className="tp-brand-item text-center">
                                            <Image src={item} width={500} height={500} style={{ width: '100%', height: '100%' }} alt="Brand Logo" />
                                        </div>
                                    </div>
                                ))
                            }
                            {
                                urlArray.map((item, i) => (
                                    <div className='grid-items' key={i}>
                                        <div className="tp-brand-item text-center">
                                            <Image src={item} width={500} height={500} style={{ width: '100%', height: '100%' }} alt="Brand Logo" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandArea;
