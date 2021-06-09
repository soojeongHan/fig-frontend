import React from "react";
import styled from "styled-components";
import product1 from "../../../image/image-11.png";
import product2 from "../../../image/image-13.png";
import product3 from "../../../image/image-14.png";
import product4 from "../../../image/image-12.png";
import Button from "../../common/Button/Button";

const MarketContainer = styled.div`
  background: #f1f1f1;
  padding: 4rem 7.5rem;
`;
const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ProductInfo = styled.div`
  max-width: 300px;
`;
const ProductCategory = styled.div`
  color: grey;
  margin-bottom: 1.5rem;
`;
const ProductName = styled.div`
  font-size: 3rem;
  font-weight: bolder;
  margin-bottom: 1rem;
`;
const ProductPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  color: grey;
  margin-bottom: 2rem;
`;
const ProductButtonAddCart = styled(Button).attrs((props) => ({
  background: "#4d66ff",
  text: "#fff",
  cart: "#fff",
}))`
  background: ${(props) => props.background};
  color: #fff;
`;
const ProductImageWrapper = styled.div`
  display: inherit;
  width: 30rem;
  height: 30rem;
  justify-content: center;
  background: #4d66ff;
  border-radius: 50%;
`;
const ProductImage = styled.img`
  width: 45rem;
  height: 45rem;
  transform: translate(-10%, -12%);
`;
const ProductList = styled.div`
  display: inherit;
  flex-direction: column;
  justify-content: center;
`;
const ProductItemImage = styled.img`
  width: 5rem;
  & + & {
    margin-top: 1rem;
  }
`;
const ProductRecommendList = styled.div`
  padding: 2rem 4rem;
`;
const ProductRecommendItem = styled.div`
  display: flex;
`;
const ProductRecommendItemImageWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background: #ffa900;
  border-radius: 5px;
  margin-right: 20px;
`;
const ProductRecommendItemImage = styled(ProductItemImage)`
  width: 5rem;
  height: 5rem;
  transform: translate(-10%, -10%);
  object-fit: fill;
`;
const ProductRecommendItemInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ProductRecommendItemName = styled(ProductName)`
  font-size: 0.9rem;
  width: 100%;
`;
const ProductRecommendItemPrice = styled(ProductPrice)`
  font-size: 0.8rem;
`;
const PlusButton = styled(Button)`
  background: #f1f1f1;
  width: 1rem;
  height: 1rem;
  font-size: 1.3rem;
  color: grey;
`;

const Market = () => {
  const DummyData = [
    {
      category: "Men's Running Shoe",
      id: 1,
      name: "Nike Joyride Run Flyknit",
      price: `$180`,
      image: product1,
    },
    {
      category: "Men's Running Shoe",
      id: 2,
      name: "Nike Joyride Run Flyknit2",
      price: `$200`,
      image: product3,
    },
    {
      category: "Men's Running Shoe",
      id: 3,
      name: "Nike Joyride Run Flyknit3",
      price: `$250`,
      image: product2,
    },
  ];

  const [currentDisplay, setCurrentDisplay] = React.useState(DummyData[0]);

  console.log(setCurrentDisplay);
  return (
    <MarketContainer>
      {/* 상품 정보 및 리스트 */}
      <ProductWrapper>
        {/* 상품 정보 */}
        <ProductInfo>
          <ProductCategory>{currentDisplay.category}</ProductCategory>
          <ProductName>{currentDisplay.name}</ProductName>
          <ProductPrice>{currentDisplay.price}</ProductPrice>
          <ProductButtonAddCart>Add To Cart</ProductButtonAddCart>
        </ProductInfo>

        {/* 상품 이미지 */}
        <ProductImageWrapper>
          <ProductImage src={currentDisplay.image} alt={currentDisplay.name} />
        </ProductImageWrapper>

        {/* 상품 리스트 */}
        <ProductList>
          {DummyData.map((elem, i) => (
            <ProductItemImage key={i} src={elem.image} alt={elem.name} />
          ))}
        </ProductList>
      </ProductWrapper>

      {/* 상품 추천 리스트 */}
      <ProductRecommendList>
        <ProductRecommendItem>
          {/* IMAGE */}
          <ProductRecommendItemImageWrapper>
            <ProductRecommendItemImage src={product4} alt="" />
          </ProductRecommendItemImageWrapper>
          {/* INFO */}
          <ProductRecommendItemInfo>
            <ProductRecommendItemName>
              Air Jordan 6 Retro
            </ProductRecommendItemName>
            <ProductRecommendItemPrice>$225</ProductRecommendItemPrice>
            <PlusButton>+</PlusButton>
          </ProductRecommendItemInfo>
        </ProductRecommendItem>
      </ProductRecommendList>
    </MarketContainer>
  );
};

export default Market;
