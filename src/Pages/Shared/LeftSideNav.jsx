import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('/categories.json')
          .then(res => res.json())
          .then(data => setCategory(data))
    }, [])
    return (
        <div className="space-y-6">
            {category.map((cat, i) => <NavLink to={`/category/${category.id}`} className="block ml-4 text-xl font-semibold px-4" key={i}>{cat.name}</NavLink>)}
        </div>
    );
};

export default LeftSideNav;