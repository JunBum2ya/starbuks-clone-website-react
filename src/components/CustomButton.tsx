const CustomButton = (props: CustomButtonProps) => {
  const { colorType } = props;
  const className = `btn ${(colorType ? colorType === "brown" ? "btn--brown" : "" : "")}`;
  return (
    <a href="#none" className={className}>{props.children}</a>
  );
};

interface CustomButtonProps {
  colorType?: string;
  children?: React.ReactNode;
}

export default CustomButton;