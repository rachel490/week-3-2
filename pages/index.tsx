import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <Wrap>
      <Content>
        <SearchBar />
      </Content>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4b8a7e;
`;

const Content = styled.div`
  width: 800px;
  height: 600px;
  background-color: #dbd9a6;
  border-radius: 20px;
  padding: 40px;
`;
