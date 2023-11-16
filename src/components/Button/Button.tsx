interface ButtonProps {
  text?: string;
  image?: React.ReactElement;
  classname: string;
  actionOnClick?: () => void;
  disabled?: boolean;
  title?: string;
  ariaLabel?: string;
}

const Button = ({
  text,
  image,
  classname,
  actionOnClick,
  disabled,
  title,
  ariaLabel,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={classname}
      title={title}
      aria-label={ariaLabel}
      onClick={actionOnClick}
      disabled={disabled}
    >
      {text}
      {image}
    </button>
  );
};

export default Button;
