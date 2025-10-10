import { Card } from '@shared/components';
import type { Route } from './+types/_index';

export const meta: Route.MetaFunction = () => {
  return [{ title: 'Hydrogen | Home' }];
};

export default function Homepage() {
  return (
    <div className="home">
      <Card>
        <h1>Hello World</h1>
      </Card>
    </div>
  );
}
