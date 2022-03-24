import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
     const {products, onProductCountChange, shoppingCart} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

               { 
                products.map(productH => (
                    <ProductCard 
                    key={productH.id}
                    product={ productH }
                    className="bg-dark"
                    onChange={onProductCountChange}
                    value={ shoppingCart[productH.id]?.count || 0}
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="txt-white"/>
                    <ProductButtons className="custom-buttons" />
                </ProductCard>
                ))
               }
            </div>
            <div className="shopping-cart">
               {
                    Object.entries(shoppingCart).map( ([key, product]) => (
                        <ProductCard 
                        key={key}
                        product={ product }
                        className="bg-dark"
                        style={{
                            width:'100px'
                        }}
                        onChange={onProductCountChange}
                        value={product.count}
                    >
                        <ProductImage className="custom-image" />
                        <ProductButtons 
                            className="custom-buttons"
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }} />
                     </ProductCard>
                  ))
               }
            </div>
        </div>
    )
}
