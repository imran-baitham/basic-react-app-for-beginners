function Section({ children, className, title, description, xl = false }) {
  return (
    <section className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className={`mx-auto ${xl ? "max-w-4xl" : "max-w-xl"}`}>
        {title && (
          <h1 className="pt-5 font-medium text-lg tracking-wider">{title}</h1>
        )}
        {description && <p className="text-xs">{description}</p>}
        {title || description ? (
          <hr className="border border-gray-200 my-4" />
        ) : null}
        <div>{children}</div>
      </div>
    </section>
  );
}

export default Section;
