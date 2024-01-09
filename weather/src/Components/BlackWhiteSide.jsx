
export const Side = (props) => {
  const { bg, radius = "", blackRadius, sunImg = "", top, right } = props;
  return (
    <div
      className={`w-[400px] h-[600px] flex justify-center relative	 `}
      style={{
        backgroundColor: `${bg}`,
        borderTopLeftRadius: `${radius}`,
        borderBottomLeftRadius: `${radius}`,
        borderTopRightRadius: `${blackRadius}`,
        borderBottomRightRadius: `${blackRadius}`,
      }}
    >
      
    </div>
  );
};
