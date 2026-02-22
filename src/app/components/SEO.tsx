import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
}

export default function SEO({ 
  title, 
  description, 
  url = 'https://www.graduateconsult.com',
  image = 'https://res.cloudinary.com/drqx8rtbw/image/upload/v1737151234/logo_gppwlm.png',
  type = 'website'
}: SEOProps) {
  const fullTitle = title === 'Graduate Consult' ? title : `${title} | Graduate Consult`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Graduate Consult" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="keywords" content="career development, professional training, early career, talent development, Ghana, consulting, graduate programs, career consulting" />
      <meta name="author" content="Graduate Consult" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
