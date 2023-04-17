import { type V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Dog List Page" }];
};

export default function DogsLayout() {
  return (
    <div className="m-12">
      <Outlet />
    </div>
  );
}
