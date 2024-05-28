import React from "react";
export function NumberOfView({ viewNumber }: { viewNumber: number }) {
  return (
    <div className="flex flex-row h-6">
      <small>
        <em className="bg-primary p-1 rounded-lg text-third">
          {viewNumber} Lượt xem
        </em>
      </small>
    </div>
  );
}
