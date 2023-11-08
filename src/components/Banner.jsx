const Banner = () => {
    return (
        <div className="bg-gray rounded-lg lg:flex lg:justify-between lg:items-center">
            <div className="font-black max-w-2xl leading-snug p-10 text-5xl md:text-8xl md:p-20 md:leading-snug">
                <h2>PEER <br />
                    <span>BASED</span> <br/>
                    REVIEW
                </h2>
            </div>
            <div className="max-w-2xl">
                <div className="lg:p-20">
                    <img src="https://i.ibb.co/Db34kwJ/banner-1.png" />
                </div>
            </div>

        </div>
    );
};

export default Banner;