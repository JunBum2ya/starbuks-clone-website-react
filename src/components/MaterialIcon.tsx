const MaterialIcon = (props: MaterialIconProps) => {
  return (
    <div className="material-icons">
      {props.children}
    </div>
  );
};

interface MaterialIconProps {
  children?: React.ReactNode
}

export default MaterialIcon;