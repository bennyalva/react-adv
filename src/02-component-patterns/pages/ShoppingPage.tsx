import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}



export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard 
                        product={ product }
                        className="bg-dark">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title={ 'Hola Mundo' } className="txt-white" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                          product={ product }
                          className="bg-dark"
                          >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="txt-white"/>
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                          product={ product }
                          style={{
                              backgroundColor: '#70D1F8'
                          }}
                          >
                    <ProductImage  />
                    <ProductTitle style={{
                        fontWeight: 'bold',
                    }} />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }} />
                </ProductCard>
            </div>
        </div>
    )
}
