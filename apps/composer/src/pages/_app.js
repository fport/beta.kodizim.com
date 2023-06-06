import '@/styles/globals.css'
import Navbar from "@/components/Navbar";
import {Cabin} from 'next/font/google'
import {useRouter} from 'next/router';
import BreadcrumbNavigation from "@/components/Breadcrump";

const cabin = Cabin({
    weights: [400, 700],
    preload: false,
})
export default function App({Component, pageProps}) {
    const router = useRouter();

    return (
        <main className={`${cabin.className} relative`}>
            {
                router.pathname === '/' ? (
                    <Navbar/>
                ) : (
                    <BreadcrumbNavigation currentPath={router.pathname}/>
                )
            }
            <Component {...pageProps} />
        </main>
    )
}
