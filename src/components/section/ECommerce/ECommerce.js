import React from "react";
import styled from "styled-components";
import { TextHeader, TextContent } from "../../common/Text/Text";
import Button from "../../common/Button/Button";
import { image6, image } from "../../../image/index";

const ECommerceContainer = styled.div`
  background: #f1f1f1;
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
  font-size: 0.8rem;
  background: #4d66ff;
`;
const ProductName = styled(TextHeader)`
  font-size: 3rem;
  line-height: 3rem;
  margin-bottom: 1rem;
`;
const ProductExplain = styled(TextContent)`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 3rem;
`;
const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 5rem;
`;
const ProductAddCartButton = styled(Button)`
  width: 150px;
  font-size: 0.9rem;
  background: #4d66ff;
  color: #fff;
`;
const ProductPrice = styled(TextContent)`
  color: #4d66ff;
  font-weight: bolder;
  font-size: 1.1 rem;
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
  color: grey;
`;
const ProductImageWrapper = styled.div`
  flex: 1;
`;
const ProductImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 20px;
`;

const ECommerce = () => {
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
            <ProductAddCartButton>Add To Cart</ProductAddCartButton>
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
