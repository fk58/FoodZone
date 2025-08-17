import styled from 'styled-components';
import './App.css';
import { useState } from 'react';
import SearchResult from './Components/SearchReasult/SearchReasul';
import foodData from './Data/foodData'; // ✅ local data file (no server)

// No need for BASE_URL anymore
// export const BASE_URL = "http://localhost:9000";

function App() {
  const [filteredData, setFilteredData] = useState(foodData);
  const [data, setData] = useState(foodData);
  const [loading] = useState(false); // no fetch = no loading
  const [error] = useState(null);    // no fetch = no error
  const [selectedBtn, setSelectedBtn] = useState("all");

  const searchFood = (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (!query) {
      setFilteredData(data);
      return;
    }

    const filter = data?.filter((food) =>
      food.name?.toLowerCase().includes(query)
    );
    setFilteredData(filter);
  };

  const value = [
    { name: 'All', type: 'all' },
    { name: 'Breakfast', type: 'breakfast' },
    { name: 'Lunch', type: 'lunch' },
    { name: 'Dinner', type: 'dinner' },
  ];

  const handleClicked = (type) => {
    setSelectedBtn(type);

    if (type === "all") {
      setFilteredData(data);
      return;
    }

    const filter = data?.filter((food) =>
      food.type?.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
  };

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/Foody Zone.svg" alt="Foody Zone Logo" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search" onChange={searchFood} />
          </div>
        </TopContainer>

        <FilterContainer>
          {value.map((v) => (
            <Button
              key={v.name}
              onClick={() => handleClicked(v.type)}
              selected={selectedBtn === v.type}
            >
              {v.name}
            </Button>
          ))}
        </FilterContainer>

        <SearchResult data={filteredData} />
      </Container>
    </>
  );
}

export default App;

// Your styled components (unchanged)
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  background-color: #313233;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 140px;
  padding: 0 10px;

  .search {
    input {
      background-color: transparent;
      min-height: 40px;
      color: white;
      border: 2px solid red;
      border-radius: 10px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.selected ? '#ff0000' : '#ff4242')};
  color: white;
  padding: 4px 12px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  outline: none;
`;
