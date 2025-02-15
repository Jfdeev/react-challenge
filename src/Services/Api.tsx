export const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    console.log(data);
    return data.map((product: any) => {
        return {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image
        }
    });
}