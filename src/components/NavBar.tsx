import { useCanGoBack, useRouter } from "@tanstack/react-router";
import { ArrowLeft, House, User } from "lucide-react";

const NavBar = () => {
  const router = useRouter();
  const canGoBack = useCanGoBack();

  const handleGoBack = () => {
    router.history.back();
  };

  return (
    <div className="p-4 grid grid-cols-3 items-center">
      <div className="flex justify-start">
        {canGoBack && (
          <button onClick={handleGoBack}>
            <ArrowLeft size={23} />
          </button>
        )}
      </div>

      <div className="flex justify-center">
        <button onClick={() => router.navigate({ to: "/" })}>
          <House size={23} />
        </button>
      </div>

      <div className="flex justify-end">
        <button onClick={() => router.navigate({ to: "/profile" })}>
          <User size={23} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
