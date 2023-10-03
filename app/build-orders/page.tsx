import BuildOrdersFilter from '@/components/build-orders/BuildOrdersFilter';
import BuildOrdersList from '@/components/build-orders/BuildOrdersList';
import CreateNewBuildOrderButton from '@/components/build-orders/CreateNewBuildOrderButton';
import { title } from '@/components/primitives';

export default function DocsPage() {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly items-start">
      <div className="flex flex-col w-1/2 gap-4">
        <div className="flex justify-between">
          <h1 className={title()}>Build Orders</h1>
          <CreateNewBuildOrderButton />
        </div>
        <BuildOrdersList />
      </div>
      <BuildOrdersFilter />
    </div>
  );
}
