import { PropTypes } from 'prop-types';

const Button = (props) => {
    const {btnText, btnStyle, btnType} = props;
    return (
        <button type={btnType} className={`btn ${btnStyle}`}>{btnText}</button>
    );
};

Button.propTypes = {
    btnText: PropTypes.string,
    btnStyle: PropTypes.string,
    btnType: PropTypes.string,
}

export default Button;