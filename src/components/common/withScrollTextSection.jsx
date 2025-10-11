import ScrollTextSection from "./ScrollTextSection";

const withScrollTextSection = (config) => {
  // config will contain styles and options
  return function EnhancedComponent({ data }) {
    return (
      <ScrollTextSection
        data={data}
        parentClassName={config.parentClassName}
        className={config.className}
        imageSize={config.imageSize}
      />
    );
  };
};

export default withScrollTextSection;