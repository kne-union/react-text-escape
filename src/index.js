import React, {createElement} from 'react';
import PropTypes from 'prop-types';

const TextEscape = ({text, tagName, ...props}) => {
  let newText = text.replace(/</g, '&lt;');
  newText = newText.replace(/>/g, '&gt;');
  newText = newText.replace(/[\n\r]/g, '<br/>');
  newText = newText.replace(/\s/g, '&nbsp;');

  return createElement(tagName, {
    dangerouslySetInnerHTML: {
      __html: newText
    }
  });
};

TextEscape.defaultProps = {
  text: '',
  tagName: 'span'
};

TextEscape.propTypes = {
  text: PropTypes.string,
  tagName: PropTypes.string.isRequired
};

export default TextEscape;