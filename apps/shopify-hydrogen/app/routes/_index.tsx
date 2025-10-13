import { Card } from '@repo/components';
import { BUNDLE_COMPONENTS_QUERY } from '@repo/graphql/admin';
import type { ProductQuery } from '@repo/graphql/admin/types';
import { useLoaderData } from 'react-router';
import type { Route } from './+types/_index';

export const meta: Route.MetaFunction = () => {
  return [{ title: 'Hydrogen | Home' }];
};

export const loader = async ({ context: { admin } }: Route.LoaderArgs) => {
  const products = await admin.query<ProductQuery>(
    BUNDLE_COMPONENTS_QUERY,
    { id: 'gid://shopify/Product/9642095575338' },
    60
  );
  return { products };
};

export default function Homepage() {
  const { products } = useLoaderData<typeof loader>();
  return (
    <div className="home">
      <Card>
        <h1>Hello World</h1>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </Card>
    </div>
  );
}
