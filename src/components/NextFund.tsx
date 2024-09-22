
function NextFund(props: { nextFundState: string; }) {
    const nextFundState = props.nextFundState
    if (nextFundState == "founder") {
        return(
            <div className="next-fund-list-wrapper">
                <h4>Calling all Founders (and CXOs) who:</h4>
                <br/>
                    <ul className="next-fund-list">
                        <li>
                            Run a US or UK headquartered private business
                        </li>
                        <li>
                            Which has just raised funding since September 2022
                        </li>
                        <li>
                            Owns a $10m minimum stake in the business
                        </li>
                        <li>
                            Would like to participate in the success of other similar businesses
                        </li>
                    </ul>
                <br/>
            </div>
        );
    } else if (nextFundState == "nonactive") {
        return(
            <div className="next-fund-list-wrapper">
                <h4>Connected with founder(s) who may be interested and meets the following requirements?</h4>
                <br/>
                <ul className="next-fund-list">
                        <li>
                            Run a US or UK headquartered private business
                        </li>
                        <li>
                            Which has just raised funding since September 2022
                        </li>
                        <li>
                            Owns a $10m minimum stake in the business
                        </li>
                </ul>

                <br/>
                <h4>
                    We would love to get connected with you
                </h4>
            </div>
        );
    } else {
        return (<div></div>)
    }
}

export default NextFund;