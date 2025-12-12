const Spinner = ({ message = ''}) => {
    return (
        <div className="loading">
            <img src="/src/assets/spinner-double.svg" alt="spinner" className="loading__spinner"/>
        <p>Loading{message ? ` ${message}...` : '...'}</p>
        </div>
    )
}

export default Spinner;