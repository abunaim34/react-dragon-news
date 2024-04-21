import BrekingNews from "./BrekingNews";
import NewsCard from "./NewsCard";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNav";
import Navber from "./Shared/Navber";
import RightSideNav from "./Shared/RightSideNav";
import {useLoaderData} from "react-router-dom"

const Home = () => {
    const news = useLoaderData()
    return (
        <div className="font-poppins">
            <Header />
            <BrekingNews />
            <Navber />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav />
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-4xl">News Commig soon</h2>
                    {news.map(n => <NewsCard key={n._id} news={n}></NewsCard>)}
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;