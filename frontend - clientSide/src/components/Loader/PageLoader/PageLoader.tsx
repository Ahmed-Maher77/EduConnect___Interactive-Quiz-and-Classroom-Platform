import "./PageLoader.scss";

const PageLoader = () => {
    return (
        <div className="page-loader">
            <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
            </div>
        </div>
    );
};

export default PageLoader;
