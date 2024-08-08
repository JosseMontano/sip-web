import Categories from "./components/categories/categories";
import Header from "./components/header/header";
//import Products from "./components/products/products";
import QuickForm from "./components/quickForm/quickForm";


const Website = () => {


  return (
    <div>
      <Header />
      <Categories />
      {/*<Products />*/}

      <QuickForm />
    </div>
  );
};

export default Website;
