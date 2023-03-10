
function HeadingOne(props) {
  return (
    <div className="mb-3">
      <h3 className="text-lg font-medium text-center md:text-2xl lg:text-[28px] lg:text-left">
        {props.heading}
      </h3>
    </div>
  );
}

export default HeadingOne;