import closeIcon from '../assets/close.svg'

const Modal = ({ onClose, isOpen }) => {
    return (
        <>
            {isOpen && (
                <div className="modal modal-bottom sm:modal-middle pointer-events-auto opacity-100">
                    <div className="modal-backdrop bg-black opacity-30" onClick={onClose}></div>
                    <div className="modal-box overflow-hidden h-full sm:max-w-6xl bg-white text-[#003087] p-0">
                        <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost p-1 absolute right-3 top-3">
                            <img src={closeIcon} style={{ filter: "brightness(0) invert(1)" }} alt="" srcset="" />
                        </button>
                        <div className="flex flex-col h-full">
                            <div className="bg-gradient-to-r from-[#003087] to-[#00A0DF] p-6">
                                <h3 className="font-bold text-3xl text-white">Placeholder Company</h3>
                            </div>
                            <div className="px-3 max-h-full py-12 sm:p-4 overflow-y-scroll">
                                <p className="text-lg font-semibold mb-4">Innovating for a Better Tomorrow</p>
                                <p className="mb-4">TechCorp Solutions is a leading technology company specializing in artificial intelligence and machine learning solutions. We're committed to pushing the boundaries of what's possible in tech.</p>
                                <h4 className="font-bold text-xl mb-2 text-[#F26522]">What We Offer:</h4>
                                <ul className="list-disc list-inside mb-4">
                                    <li>Cutting-edge AI projects</li>
                                    <li>Collaborative work environment</li>
                                    <li>Competitive salary and benefits</li>
                                    <li>Opportunities for professional growth</li>
                                </ul>
                                <h4 className="font-bold text-xl mb-2 text-[#F26522]">We're Looking For:</h4>
                                <ul className="list-disc list-inside mb-4">
                                    <li>Software Engineers</li>
                                    <li>Data Scientists</li>
                                    <li>UI/UX Designers</li>
                                    <li>Product Managers</li>
                                </ul>
                                <div className="mt-6">
                                    <button className="hoverable btn bg-[#F26522] text-white hover:bg-[#FDB913] border-none w-full">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;