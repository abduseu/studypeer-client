import feature from '../assets/feature.svg';

const Feature = () => {
    return (
        <div>
            <div className="mx-auto w-full py-16 md:py-24 lg:py-32">
                {/* Component */}
                <div className="flex flex-col gap-8 sm:gap-20 lg:flex-row-reverse lg:items-center">
                    {/* Item */}
                    <div className="lg:w-1/2">
                        {/* Title */}
                        <div className="mb-4 max-w-3xl text-3xl font-semibold md:text-5xl">
                            <h3>BEST <span className="font-light">FEATURES</span></h3>
                        </div>
                        <p className="mb-6 max-w-lg text-sm text-[#636262] sm:text-base md:mb-10 lg:mb-12">
                            STUDYPEER is an online platform for students to engage in peer-based assignment reviews, promoting collaborative learning and constructive feedback within an educational environment.
                        </p>
                        <div className="mb-12 mt-12 h-0 w-40 border [border-top-style:solid]" />
                        {/* List */}
                        <ul className="flex flex-col">
                            <li className="mb-2 flex items-center">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2 inline-block h-4 w-4"
                                />
                                <p className="text-[#636262] max-[479px]:text-sm">
                                    Collaborative Assignment Reviews
                                </p>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2 inline-block h-4 w-4"
                                />
                                <p className="text-[#636262] max-[479px]:text-sm">
                                    Anonymous Feedback
                                </p>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img
                                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                                    alt=""
                                    className="mr-2 inline-block h-4 w-4"
                                />
                                <p className="text-[#636262] max-[479px]:text-sm">
                                    Security and Data Privacy
                                </p>
                            </li>
                        </ul>
                    </div>
                    {/* Item */}
                    <div className="lg:w-1/2 bg-gray flex justify-center rounded-lg">
                        <img src={feature} className='w-1/2 py-12' />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Feature;