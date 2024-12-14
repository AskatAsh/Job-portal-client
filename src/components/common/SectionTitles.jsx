
import { PropTypes } from 'prop-types';
const SectionTitles = (props) => {
    const {title, subtitle} = props;
    return (
        <div className="max-w-2xl w-full px-4 mx-auto space-y-4 text-center">
            <h2 className="text-3xl font-medium text-gray-800 dark:text-gray-300">{title}</h2>
            <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
    );
};

SectionTitles.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default SectionTitles;