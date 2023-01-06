import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductFeed({ products }) {
  return (
    <dvi>
      <h1>Products here...</h1>
      {products
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </dvi>
  );
}

export default ProductFeed;
