import React from 'react';

import {GetPost} from "../../types";
import GetPosts from "../../components/GetPosts/GetPosts";

interface  Props{
    Posts:GetPost[];
}

const Home:React.FC <Props> = ({Posts}) => {
    return (
        <>
            <div className="col-12">
                <GetPosts Posts={Posts}/>
            </div>
        </>
    );
};

export default Home;