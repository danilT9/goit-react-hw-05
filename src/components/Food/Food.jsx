import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 20px;
`

const FoodImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  object-fit: cover;
`

const Title = styled.h3`
  font-size: 20px;
  margin: 15px 0 0 0;
  padding: 0;
`

const InfoList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`

const Difficulty = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`

const DifficultyItem = styled.li`
  display: flex;
  justify-content: center;
  aligh-items: center;
  background-color: ${props => props.active ? 'rgb(180, 0, 0)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'black'};
  width: 70px;
  text-align: center;
  border-radius: 5px;
  margin: 0;
  padding: 0;
`

export const FoodItem = ({...props}) => {
  return (
    <FoodContainer>
      <FoodImage src={props.src} className="icon" alt={props.name}/>
      <Title>{props.name}</Title>
      <InfoList>
        <li><p>{props.time} min</p></li>
        <li><p>{props.servings} servings</p></li>
        <li><p>{props.calories} calories</p></li>
      </InfoList>
      <Difficulty>
        <DifficultyItem active={props.difficulty === 0}>
          <p>Easy</p>
        </DifficultyItem>
        <DifficultyItem active={props.difficulty === 1}>
          <p>Medium</p>
        </DifficultyItem>
        <DifficultyItem active={props.difficulty === 3}>
          <p>Hard</p>
        </DifficultyItem>
      </Difficulty>
    </FoodContainer>
  );
}