import spinnerSVG from './assets/spinner-double.svg';

const Spinner = ({ message = ''}) => {
    return (
        <div className="spinner">
            <img className="spinner__icon"
                src={spinnerSVG} alt="spinner" />
            <p>Loading{message ? ` ${message}...` : '...'}</p>
        </div>
    )
}

export default Spinner;