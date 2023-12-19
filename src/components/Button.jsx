import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

const Button = (props) => {
  return (
    <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
      <h3 className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
        {props.children}
      </h3>
    </div>
  );
};

export default Button;
