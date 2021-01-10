var appLogic = function () {
  this.categories = ["ECT", "ECL", "FOD"];
  this.products = [
    {
      ProductId: 101,
      ProductName: "Laptop",
      CategoryName: "ECT",
      Price: 100000,
    },
    { ProductId: 102, ProductName: "Iron", CategoryName: "ECL", Price: 2000 },
    { ProductId: 103, ProductName: "Biscuits", CategoryName: "FOD", Price: 20 },
  ];
  this.getProducts = function () {
    return this.products;
  };
  this.addProduct = function (prd) {
    this.products.push(prd);
    return this.products;
  };
  this.updateProduct = function (prd) {
    for (var product of this.products) {
      if (product.ProductId == prd.ProductId) {
        product.ProductName = prd.ProductName;
        product.CategoryName = prd.CategoryName;
        product.Price = prd.Price;
      }
    }
    return this.products;
  };
};
