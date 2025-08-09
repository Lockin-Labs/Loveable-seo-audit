import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
}

export const Seo = ({ title, description, canonical, image }: SeoProps) => {
  const fullTitle = title.length > 60 ? title.slice(0, 57) + "..." : title;
  const metaDescription = description?.slice(0, 160);
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {metaDescription && <meta name="description" content={metaDescription} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={fullTitle} />
      {metaDescription && (
        <meta property="og:description" content={metaDescription} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};
