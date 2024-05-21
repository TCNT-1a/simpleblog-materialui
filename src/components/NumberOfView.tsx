import React from "react";
export function NumberOfView({ viewNumber }: { viewNumber: number }) {
  return (
    <div className="flex flex-row">
      <small>
        <em className="bg-bg-secondary">{viewNumber} Lượt xem</em>
      </small>
    </div>
  );
}
