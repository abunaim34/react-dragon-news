import Header from "./Shared/Header";
import Navber from "./Shared/Navber";
import RightSideNav from "./Shared/RightSideNav";
import {useParams} from "react-router-dom"

const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navber />
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Detail</h2>
                    <p>{id}</p>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;