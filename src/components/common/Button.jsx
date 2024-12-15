import { PropTypes } from 'prop-types';

const Button = (props) => {
    const {btnText = "Click Here", btnStyle = "", btnType = ""} = props;
    return (
        <button type={btnType} className={`btn ${btnStyle}`}>{btnText}</button>
    );
};

Button.propTypes = {
    btnText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    btnStyle: PropTypes.string,
    btnType: PropTypes.string,
}

export default Button;