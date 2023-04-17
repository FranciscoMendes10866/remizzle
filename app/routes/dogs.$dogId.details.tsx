import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { eq } from "drizzle-orm/expressions";
import type { RouteParams } from "routes-gen";

import { db } from "~/db/config.server";
import { dogs } from "~/db/schema.server";

export const loader = ({ params }: LoaderArgs) => {
  const { dogId } = params as RouteParams["/dogs/:dogId/details"];

  const result = db
    .select()
    .from(dogs)
    .where(eq(dogs.id, Number(dogId)))
    .get();

  return json(result);
};

export default function DogDetailsMain() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="w-3/5 lg:w-2/5">
      <h2 className="mb-6">Dog details:</h2>

      <div className="mockup-code">
        <pre data-prefix="~">
          <code>Name: {data.name}</code>,&nbsp;
          <code>Breed: {data.breed}</code>
        </pre>
      </div>
    </div>
  );
}
