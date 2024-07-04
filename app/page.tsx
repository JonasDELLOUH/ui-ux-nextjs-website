import {Navbar} from "@/app/components/Navbar";
import {Hero} from "@/app/components/Hero";
import {Features} from "@/app/components/Features";

export default function Home() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <div className="px-[20px] lg:container lg:px-20 mx-auto">
                <Features/>
            </div>
        </>
    );
}
