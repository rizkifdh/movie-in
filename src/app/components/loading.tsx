import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="inline-flex items-center gap-3 text-2xl">
        <span className="loading loading-spinner"></span>
        loading
      </div>
    </div>
  );
}
