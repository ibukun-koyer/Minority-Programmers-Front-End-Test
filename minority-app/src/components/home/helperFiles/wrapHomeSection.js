function WrapHomeSection({ children, color, height }) {
  return (
    <div
      style={{
        backgroundColor: color,
        height,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
export default WrapHomeSection;
