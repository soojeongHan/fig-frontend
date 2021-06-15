import React from "react";
import styled from "styled-components";
import product1 from "../../../image/image-11.png";
import product2 from "../../../image/image-13.png";
import product3 from "../../../image/image-14.png";
import product4 from "../../../image/image-12.png";
import Button from "../../common/Button/Button";
import CartButton from "../../common/Button/CartButton";

const MarketContainer = styled.div`
  background: ${({ theme }) => theme.color.lightGrey};
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
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: 1.5rem;
`;
const ProductName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  line-height: ${({ theme }) => theme.lineHeight.xLarge};
  margin-bottom: 1rem;
`;
const ProductPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  line-height: ${({ theme }) => theme.lineHeight.large};
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: 2rem;
`;

const ProductImageWrapper = styled.div`
  display: inherit;
  width: 30rem;
  height: 30rem;
  justify-content: center;
  background: ${({ theme }) => theme.color.blue};
  border-radius: 50%;
  margin-right: 5%;
`;
const ProductImage = styled.img`
  width: 30rem;
  height: 30rem;
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
  background: ${({ theme }) => theme.color.yellow};
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
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  width: 100%;
`;
const ProductRecommendItemPrice = styled(ProductPrice)`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  line-height: ${({ theme }) => theme.lineHeight.xSmall};
`;
const PlusButton = styled(Button)`
  background: ${({ theme }) => theme.color.lightGrey};
  width: 1rem;
  height: 1rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  color: ${({ theme }) => theme.color.grey};
`;

const Market = ({ setIsError, loading, error, success, onClick, isError }) => {
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

  const currentDisplay = DummyData[0];

  return (
    <MarketContainer>
      {/* 상품 정보 및 리스트 */}
      <ProductWrapper>
        {/* 상품 정보 */}
        <ProductInfo>
          <ProductCategory>{currentDisplay.category}</ProductCategory>
          <ProductName>{currentDisplay.name}</ProductName>
          <ProductPrice>{currentDisplay.price}</ProductPrice>
          <CartButton loading={loading} onClick={onClick} error={error}>
            Add To Cart
          </CartButton>
          <div>
            <input
              type="radio"
              name="error"
              id="error"
              onChange={() => setIsError(true)}
              checked={isError}
            />
            <label>Error</label>
            <input
              type="radio"
              name="error"
              id="not-error"
              onChange={() => setIsError(false)}
              checked={!isError}
            />
            <label>Not Error</label>
          </div>
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
