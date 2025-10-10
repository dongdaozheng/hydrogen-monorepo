import type { ProductItemFragment } from '@shared/graphql/storefront/types';
import { useVariantUrl } from '@shared/lib';
import { Image, Money } from '@shopify/hydrogen';
import { Link } from 'react-router';

export function ProductItem({ product, loading }: { product: ProductItemFragment; loading?: 'eager' | 'lazy' }) {
  const variantUrl = useVariantUrl(product.handle);
  const image = product.featuredImage;
  return (
    <Link className="product-item" key={product.id} prefetch="intent" to={variantUrl}>
      {image && (
        <Image
          alt={image.altText || product.title}
          aspectRatio="1/1"
          data={image}
          loading={loading}
          sizes="(min-width: 45em) 400px, 100vw"
        />
      )}
      <h4>{product.title}</h4>
      <small>
        <Money data={product.priceRange.minVariantPrice} />
      </small>
    </Link>
  );
}
