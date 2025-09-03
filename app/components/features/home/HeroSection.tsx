interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export function HeroSection({ title, description, ctaText, ctaLink, backgroundImage }: HeroSectionProps) {
  return (
    <div 
      className="relative h-[90vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            {description}
          </p>
          <a
            href={ctaLink}
            className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  );
}
