import type { V2_MetaFunction } from "@remix-run/react";
import { Link, Outlet, useParams } from "@remix-run/react";
import type { RouteParams } from "routes-gen";
import { route } from "routes-gen";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Dog Details Page" }];
};

export default function DogDetails() {
  const { dogId } = useParams<RouteParams["/dogs/:dogId"]>();

  return (
    <div className="flex flex-row space-x-12">
      <ul className="menu bg-base-100 w-56 rounded-box">
        <li>
          <Link
            to={route("/dogs/:dogId/details", {
              dogId: dogId ?? "",
            })}
          >
            Details
          </Link>
        </li>
        <li>
          <Link
            to={route("/dogs/:dogId/update", {
              dogId: dogId ?? "",
            })}
          >
            Update
          </Link>
        </li>
        <li className="text-red-600">
          <Link
            to={route("/dogs/:dogId/remove", {
              dogId: dogId ?? "",
            })}
          >
            Remove
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
