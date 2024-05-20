import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
export function NumberOfView({ viewNumber }: { viewNumber: number }) {
  return (
    <div className="flex flex-row">
      <VisibilityIcon />
      <em className="body1">{viewNumber}</em>
    </div>
  );
}
