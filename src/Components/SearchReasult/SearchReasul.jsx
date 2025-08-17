import styled from 'styled-components';
import { Button } from '../../App';
import { Container } from '../../App';

const SearchResult = ({ data }) => {
  if (!data || data.length === 0) {
    return <NoResult>No food items found.</NoResult>;
  }

  return (
    <FoodCardContainer>
      <Container>
        <FoodCards>
          {data.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img src={image} alt={name} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </Container>
    </FoodCardContainer>
  );
};

export default SearchResult;

// Styled Components

const FoodCardContainer = styled.section`
  background-image: url("jimmy.png");
  min-height: calc(100vh - 220px);
  background-size: cover;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.2px);
  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food_image {
    margin-right: 16px;
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }

    p {
      margin-top: 4px;
      font-size: 12px;
    }

    button {
      font-size: 12px;
    }
  }
`;

const NoResult = styled.p`
  text-align: center;
  font-size: 18px;
  padding: 40px;
  color: #ff4242;
`;
