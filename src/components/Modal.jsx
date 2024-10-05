import closeIcon from '../assets/close.svg'

const Modal = ({ onClose, item }) => {
    console.log(item)
    const { name, company_full_info } = item;
    const {
        description,
        targetMajors,
        locations,
        internshipCompensation,
        relocationAssistance,
        connections,
        careerPages,
        additionalInfo,
        careerLink
    } = company_full_info;

    return (
        <>
            <div className="modal modal-bottom sm:modal-middle pointer-events-auto opacity-100">
                <div className="modal-backdrop bg-black opacity-30" onClick={onClose}></div>
                <div className="modal-box overflow-hidden h-full sm:max-w-6xl bg-white text-[#003087] p-0">
                    <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost p-1 absolute right-3 top-3">
                        <img src={closeIcon} style={{ filter: "brightness(0) invert(1)" }} alt="Close" />
                    </button>
                    <div className="flex flex-col h-full">
                        <div className="bg-gradient-to-r from-[#003087] to-[#00A0DF] p-6">
                            <h3 className="font-bold text-3xl text-white">{name}</h3>
                        </div>
                        <div className="px-3 max-h-full pb-12 pt-6 sm:p-4 overflow-y-scroll">
                            {description && (
                                <p className="mb-4">{description}</p>
                            )}

                            {targetMajors && targetMajors.length > 0 && (
                                <>
                                    <h4 className="font-bold text-xl mb-2 text-[#F26522]">Target Majors:</h4>
                                    <ul className="list-disc list-inside mb-4">
                                        {targetMajors.map((major, index) => (
                                            <li key={index}>{major}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {locations && (locations.domestic || locations.international) && (
                                <>
                                    <h4 className="font-bold text-xl mb-2 text-[#F26522]">Locations:</h4>
                                    {locations.domestic && (
                                        <>
                                            <h5 className="font-semibold mb-1">Domestic:</h5>
                                            <ul className="list-disc list-inside mb-2">
                                                {locations.domestic.map((location, index) => (
                                                    <li key={index}>{location}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    {locations.international && (
                                        <>
                                            <h5 className="font-semibold mb-1">International:</h5>
                                            <ul className="list-disc list-inside mb-4">
                                                {locations.international.map((location, index) => (
                                                    <li key={index}>{location}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </>
                            )}

                            {internshipCompensation && internshipCompensation.range && (
                                <p className="mb-4"><strong>Internship Compensation:</strong> {internshipCompensation.range}</p>
                            )}

                            {relocationAssistance && (
                                <p className="mb-4"><strong>Relocation Assistance:</strong> {relocationAssistance}</p>
                            )}

                            {connections && connections.length > 0 && (
                                <>
                                    <h4 className="font-bold text-xl mb-2 text-[#F26522]">Connections:</h4>
                                    <ul className="list-none mb-4">
                                        {connections.map((connection, index) => (
                                            <li key={index}>
                                                <a href={connection.url} target="_blank" rel="noopener noreferrer" className="text-[#00A0DF] hover:underline">
                                                    {connection.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {careerPages && careerPages.length > 0 && (
                                <>
                                    <h4 className="font-bold text-xl mb-2 text-[#F26522]">Career Pages:</h4>
                                    <ul className="list-none mb-4">
                                        {careerPages.map((page, index) => (
                                            <li key={index}>
                                                <a href={page.url} target="_blank" rel="noopener noreferrer" className="text-[#00A0DF] hover:underline">
                                                    {page.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {additionalInfo && (
                                <>
                                    <h4 className="font-bold text-xl mb-2 text-[#F26522]">Additional Information:</h4>
                                    <p className="mb-4">{additionalInfo}</p>
                                </>
                            )}

                            <div className="mt-6">
                                <a className="hoverable btn bg-[#F26522] text-white hover:bg-[#FDB913] border-none w-full" href={careerLink} target="_blank">
                                    Opportunities!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;