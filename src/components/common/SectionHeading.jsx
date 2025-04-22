
const SectionHeading = ({ title, subtitle, center = true }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <h2 className={`section-title ${center ? 'mx-auto' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`text-portfolio-text mt-4 max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
