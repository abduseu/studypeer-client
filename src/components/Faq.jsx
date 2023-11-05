const Faq = () => {
    return (
        <section>
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-24 lg:py-32">
                <div className="mx-auto flex max-w-[550px] flex-col items-center justify-center px-6 text-center lg:max-w-[800px] lg:px-10">
                    <h1 className="mx-auto text-center font-bold text-black lg: text-3xl lg:text-4xl">
                        Frequently Asked Questions
                    </h1>

                </div>
                {/* FAQs */}
                <div className="mt-10 flex w-full max-w-[900px] flex-col">

                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                How to submit an assignment?
                            </div>
                            <div className="collapse-content">
                                <p>It is very simple and easy. Please contact to our support if you find it difficult.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                How to mark an assignment?
                            </div>
                            <div className="collapse-content">
                                <p>It is very simple and easy. Please contact to our support if you find it difficult.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Is this service free?
                            </div>
                            <div className="collapse-content">
                                <p>It is absolutey free. All you have to do is check other students assignment before you submit.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <p className="font-inter mx-auto mt-12 text-center text-base text-gray-500">
                    Can’t find the answer you’re looking for? contact to our support.
                </p>
            </div>
        </section>

    );
};

export default Faq;