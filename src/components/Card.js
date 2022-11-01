import CountdownTimer from "./CountdownTimer/CountdownTimer";

function Card({ title, doDateTimestamp, currentTimestamp, message, company, nextPosition }) {
    const isTimeOut = doDateTimestamp - currentTimestamp <= 0;

    return (
        <div className="col rounded bg-gradient-1 text-white shadow p-5 text-center mb-5">
            <h4 className="mb-4 font-weight-bold text-uppercase">{title}</h4>
            <div
                id="clock-b"
                className="countdown-circles d-flex flex-wrap justify-content-center"
            >
                <ConditionalTimeRender
                    isTimeOut={isTimeOut}
                    doDateTimestamp={doDateTimestamp}
                    message={message}
                    company={company}
                    nextPosition={nextPosition}
                />
            </div>
        </div>
    );
}
function ConditionalTimeRender({ isTimeOut, doDateTimestamp, message, company, nextPosition }) {
    if (!isTimeOut)
        return <div>
            Current company: {company}
            <br/>
            Next position: {nextPosition}
            <br/>
            <CountdownTimer countdownTimestampMs={doDateTimestamp} />

        </div>

    return <div>
        {message}
        <br/>
        <CountdownTimer countdownTimestampMs={doDateTimestamp} />
    </div>;
}

export default Card;