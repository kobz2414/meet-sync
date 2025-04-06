import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="m-4">
      <div className="flex flex-col max-w-xl w-full mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
