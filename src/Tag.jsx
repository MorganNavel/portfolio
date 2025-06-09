import "./App.css";
import PropTypes from "prop-types";

export function Tag({
  text,
  className = "",
  icon,
  backgroundColor,
  textColor,
  ...props
}) {
  return (
    <div
      className={`tag ${className}`}
      style={{
        backgroundColor: backgroundColor || "transparent",
        color: textColor || "inherit",
      }}
      {...props}
    >
      {icon && <span className='icon'>{icon}</span>}
      <span className='tag-text'>{text}</span>
    </div>
  );
}

Tag.propTypes = {
  text: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};
