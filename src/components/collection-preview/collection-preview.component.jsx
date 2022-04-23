import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.filter((items, index) => index < 4).map((item) => (
          <CollectionItem id={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price}/>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
