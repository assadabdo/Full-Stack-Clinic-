export const ServiceCard = ({
  icon,
  title,
  description,
  backgroundIcon,

  borderColor,
}) => {
  return (
    <div
      className="service-card"
      style={{ borderTop: `5px solid ${borderColor}` }}
    >
      <div className="aligment">
        <div className="icon" style={{ backgroundColor: backgroundIcon }}>
          {icon}
        </div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
