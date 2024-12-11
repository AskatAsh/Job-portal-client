import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';

const FooterLinks = (props) => {
    const {linkText, linkPath = "#"} = props;
  return (
    <Link
      to={linkPath}
      title={linkText}
      className="flex items-center text-sm text-gray-800 dark:text-gray-500 transition-all duration-200 hover:text-blue-600 hover:dark:text-blue-500 focus:text-blue-600 group"
    >
      <span className="w-0 overflow-hidden group-hover:w-5 text-xl transition-[width] duration-200">
        <IoIosArrowRoundForward />
      </span>
      <span>{linkText}</span>
    </Link>
  );
};

FooterLinks.propTypes = {
    linkText: PropTypes.string,
    linkPath: PropTypes.string,
}
export default FooterLinks;
