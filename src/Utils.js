import React from "react";

export function IsThisProductExpired({ expiredDate, image }) {
  var date = Date.now();
  if (expiredDate < date) {
    return (
        <img
          style={{ marginBottom: "1px", marginTop: "-280px",rotate:"-30deg" }}
          src="/images/ex.png"
          alt="Nike-Shoe"
          className="sneaaker-img overlay-image"
        />
    );
  }
  return null;
}
