import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function UUID() {
  const [uuid, setUuid] = useState<string | null>(null);

  const onClickHandler = () => {
    setUuid(uuidv4());
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="h-8 rounded-md bg-black px-4 text-white"
        onClick={onClickHandler}
      >
        Generate UUID
      </button>
      {uuid && <p className="mt-4">{uuid}</p>}
    </div>
  );
}
