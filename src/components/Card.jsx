export default function Card(props) {
    const { children } = props;
    return (
        <div
            className="card"
            style={{
                width: '350px',
            }}
        >
            <div className="card-body">{children}</div>
        </div>
    );
}

export function CardBody(props) {
    const { title, subtitle, text } = props;

    return (
        <>
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
                {subtitle}
            </h6>
            <p className="card-text">{text}</p>
            <a href="#" className="card-link">
                Card link
            </a>
            <a href="#" className="card-link">
                Another link
            </a>
        </>
    );
}
