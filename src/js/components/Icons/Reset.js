import React from 'react';
import PropTypes from 'prop-types'

const Reset = ({
  className = '',
  ...props
  }) => (
  <svg 
    data-testid="reset"
    width="1em" 
    height="1em" 
    viewBox="0 0 16.483 14.69" 
    className={`reset ${className}`}
    {...props}
    >
    <g fillRule="evenodd">
      <path d="M7.776 14.622c-2.527-.28-4.855-1.85-6.005-4.052-.224-.43-.6-1.39-.6-1.535 0-.033.482-.06 1.07-.059l1.07.001.209.5c.666 1.589 2.07 2.777 3.836 3.247.635.17 2.09.166 2.747-.006.669-.175 1.602-.624 2.118-1.02.88-.676 1.68-1.853 1.971-2.905.188-.674.228-1.78.09-2.478-.228-1.165-.702-2.026-1.59-2.893-1.082-1.057-2.214-1.546-3.715-1.607-.705-.028-.983-.007-1.518.117-1.813.419-3.371 1.73-3.999 3.363l-.132.344h-2.16l.05-.199c.108-.44.569-1.443.896-1.95.454-.704 1.389-1.65 2.097-2.123C8.495-1.494 14.426.333 16.083 5.023c1.559 4.414-1.61 9.072-6.53 9.602-.802.087-.967.085-1.777 0z"/>
      <path d="M.095 8.737h4.418v.883H.095z"/>
      <path d="M0 5.162l4.607.06-2.36 3.537z"/></g>
  </svg>  
);

Reset.propTypes = {
  className: PropTypes.string
}

export default Reset;

