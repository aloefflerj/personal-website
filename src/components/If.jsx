import PropTypes from 'prop-types';

export function If({ is, children }) {
    if (!is) return;

    return children;
}

If.propTypes = {
    condition: PropTypes.bool,
    children: PropTypes.any,
};
