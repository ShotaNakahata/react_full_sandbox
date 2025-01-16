/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { log } from '../../log.js';

export default function IconButton({ children, icon, ...props }) {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
}
