/**
 * SectionHeading Component
 * Reusable heading with gradient accent underline.
 */
export default function SectionHeading({ title, subtitle, id, className = "" }) {
  return (
    <div id={id} className={`mb-12 text-center ${className}`}>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3 [@media(max-height:700px)]:text-2xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto [@media(max-height:700px)]:text-xs">
          {subtitle}
        </p>
      )}
      {/* Accent underline */}
      <div className="mt-4 flex justify-center">
        <div className="section-underline w-16 h-1 rounded-full bg-gradient-to-r from-accent-primary to-accent-cyan" />
      </div>
    </div>
  );
}
