import React from "react";
import styled from "styled-components";
import { TextHeader, TextContent } from "../../common/Text/Text";
import CartButton from "../../common/Button/CartButton";
import { image6, image } from "../../../image/index";

const ECommerceContainer = styled.div`
  background: ${({ theme }) => theme.color.lightGrey};
  display: flex;
  padding: 4rem;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 2rem 4rem;
`;
const Product = styled.div`
  display: flex;
  flex-direction: column;
`;
const PersonLikeProduct = styled.div``;
const PersonList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
const Person = styled.div`
  width: 25px;
  height: 25px;
  background: ${(props) => `url(${props.image})`};
  background-size: cover;
  border-radius: 50%;
`;
const OtherPerson = styled(Person)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  line-height: ${({ theme }) => theme.lineHeight.xxSmall};
  background: ${({ theme }) => theme.color.blue};
`;
const ProductName = styled(TextHeader)`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  line-height: ${({ theme }) => theme.lineHeight.xLarge};
  margin-bottom: 1rem;
`;
const ProductExplain = styled(TextContent)`
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  margin-bottom: 3rem;
`;
const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 5rem;
`;
const ProductPrice = styled(TextContent)`
  color: ${({ theme }) => theme.color.blue};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
`;
const ProductRecommendationList = styled.div``;
const RecommendationProduct = styled.div`
  display: flex;
  align-items: center;
`;
const RecommendationProductImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 15px;
`;
const RecommendationProductInfo = styled.div`
  margin-left: 1rem;
`;
const RecommendationProductName = styled(TextContent)`
  font-weight: bolder;
`;
const RecommendationProductPrice = styled(TextContent)`
  color: ${({ theme }) => theme.color.grey};
`;
const ProductImageWrapper = styled.div`
  overflow: hidden;
  flex: 1;
`;
const ProductImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 20px;
  object-fit: cover;
`;

const ECommerce = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <ECommerceContainer>
      <ProductWrapper>
        <Product>
          <PersonLikeProduct>
            <PersonList>
              <Person image={image} />
              <OtherPerson>+5</OtherPerson>
            </PersonList>
          </PersonLikeProduct>
          <ProductName>
            Furniture Is Art <br />
            With An Attitude
          </ProductName>
          <ProductExplain>
            This is big one and I consider one of the most <br />
            important thing for a designer to get right.
          </ProductExplain>
          <ProductInfoWrapper>
            <CartButton
              loading={loading}
              onClick={() => {
                setLoading((load) => !load);
                setTimeout(() => {
                  setLoading((load) => !load);
                }, 3700);
              }}
            >
              Add To Cart
            </CartButton>
            <ProductPrice>$1299</ProductPrice>
          </ProductInfoWrapper>
        </Product>
        <ProductRecommendationList>
          <RecommendationProduct>
            <RecommendationProductImage src={image6} alt="" />
            <RecommendationProductInfo>
              <RecommendationProductName>
                Easy Squeeze Sofa Bed
              </RecommendationProductName>
              <RecommendationProductPrice>$1595</RecommendationProductPrice>
            </RecommendationProductInfo>
          </RecommendationProduct>
        </ProductRecommendationList>
      </ProductWrapper>
      <ProductImageWrapper>
        <ProductImage src={image6} />
      </ProductImageWrapper>
    </ECommerceContainer>
  );
};

export default ECommerce;
