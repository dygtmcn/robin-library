import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomeContent.css";

const HomeContent = () => {
    const navigate = useNavigate(); // useNavigate ile yönlendirme

    const handleSignupClick = () => {
        navigate("/signup"); // Signup sayfasına yönlendirme
    };

    return (
        <div>
            <div className="summary">
                <div className="box-container color-main">
                    <div className="box color-main">
                        <h1>Explore, Read, Challenge <br /> Make Reading Fun!</h1>
                        <p>
                            Welcome to the ultimate AI-powered reading club for kids. Join challenges, track progress, and get personalized recommendations.
                        </p>
                        <button className="boxBtn" onClick={handleSignupClick}>Join Now</button>
                    </div>
                    <div className="box color-main">
                        <p>
                            Track your favorite books, set exciting reading challenges, and join a
                            community of young book lovers!
                        </p>
                    </div>
                </div>
            </div>
            <div className="summary">
                <div className="box-container">
                    <div className="box color-red">
                        <h1>Discover Your Reading Journey!</h1>
                        <p>
                            Keep track of the books you've read and explore your reading habits. Get personalized, AI-powered book recommendations tailored just for you!
                        </p>
                    </div>
                    <div className="box color-blue">
                        <h1>Create, Share, and Conquer Your Reading Goals</h1>
                        <p>
                            Build your own reading challenges or join your friends' challenges. Inspire each other and make reading even more fun!
                        </p>
                    </div>
                </div>
            </div>
            <div className="summary">
                <div className="box-container">

                </div>
            </div>
        </div>
    );
};

export default HomeContent;
