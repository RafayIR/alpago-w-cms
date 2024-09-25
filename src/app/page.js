'use client'
import HomePage from "./home/page";
import WebsiteLoader from '../components/websiteloader/WebsiteLoader'
import { ReactLenis } from 'lenis/react'

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <WebsiteLoader />
        <HomePage />
      </ReactLenis>
    </>
  );
}
