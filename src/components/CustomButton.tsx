const CustomButton = (props: CustomButtonProps) => {
  const { colorType, classList } = props;
  const className = `btn ${colorType ? `btn--${colorType}` : ""} ${classList?.join(" ")}`
  return (
    <a href="#none" className={className}>{props.children}</a>
  );
};

interface CustomButtonProps {
  colorType?: string;
  classList?: string[]
  children?: React.ReactNode;
}

export default CustomButton;