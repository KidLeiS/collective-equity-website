import React from "react";

function NextFund(props: { nextFundState: string; }) {
    const nextFundState = props.nextFundState
    if (nextFundState == "founder") {
        return(
            <div className="next-fund-list-wrapper">
                <h4>Calling all Founders (and CXOs) who:</h4>
                    <ul className="next-fund-list">
                        <li>
                            Run a US or UK headquartered private business
                        </li>
                        <li>
                            Which has just raised funding since March 2023
                        </li>
                        <li>
                            Owns a $10m minimum stake in the business
                        </li>
                        <li>
                            Would like to participate in the success of other similar businesses
                        </li>
                    </ul>
            </div>
        );
    } else if (nextFundState == "nonactive") {
        return(
            <div className="next-fund-list-wrapper">
                <h4>Calling all shareholders & ex-employees who:</h4>
                <ul className="next-fund-list">
                    <li>
                        Own shares in a US or UK headquartered private business
                    </li>
                    <li>
                        Which has just raised funding since March 2023
                    </li>
                    <li>
                        Owns a $2m minimum stake in the business
                    </li>
                    <li>
                        Is interested in liquidating or diversifying their stake into other similar investments
                    </li>
                </ul>
            </div>
        );
    } else {
        return (<div></div>)
    }
}

export default NextFund;