const Spinner = ({ message = ''}) => {
    return (
        <div className="spinner">
            <img className="spinner__icon"
                src="/src/assets/spinner-double.svg" alt="spinner" />
            <p>Loading{message ? ` ${message}...` : '...'}</p>
        </div>
    )
}

export default Spinner;