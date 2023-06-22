
const Offer = () => {
    return (
        <div >
            <div className="warning bg-black p-10 font-black text-yellow-400 rounded-full  mt-5">
              < div>Offer will start very soon .........</div>
            </div>
            <div>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center m-8 p-4 rounded-full">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 40 }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
            <div className="grid justify-center">

                    <img className="w-48" src="https://i.ibb.co/dmtMsJz/3082060.png" alt="" />
                   
            </div>


           
        </div>
    );
};

export default Offer;