import { styled } from 'solid-styled-components';

const Header = styled.header`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contrast = styled.span`
  color: #888;
`;

const Headline = styled.h1`
  font-size: 64px;
  line-height: 1.5;
  max-width: 720px;
`;

const CTA = styled.button<{ secondary?: boolean }>`
  box-sizing: border-box;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: bold;
  margin-right: 16px;
  border: ${(props) => (props.secondary ? 'none' : 'solid 2px black')};
  background: none;
  transition: ease-out all 200ms;
  cursor: pointer;

  &:hover {
    text-decoration: ${(props) => (props.secondary ? 'underline' : 'none')};
    background: #eee;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 900px;
`;

const CardsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 16px;
  padding-bottom: 16px;
`;

const Card = styled.article`
  background-color: #eee;
  padding: 16px;
  font-size: 16px;
`;

const Heading2 = styled.h2`
  font-size: 36px;
  line-height: 1.5;
`;

const HomeSection = styled.section`
  font-size: 20px;
  font-family: sans-serif;
  margin: 64px 0;
`;

const Home = () => {
  return (
    <div>
      <Header>
        <div>
          <Headline>
            <Contrast>Julian Soto.</Contrast>
            <br />I can help you build amazing web apps.
          </Headline>
          <div>
            <CTA>Contact me</CTA>
            <CTA
              secondary
              onclick={() =>
                window.open('https://github.com/JulianSoto', '_blank')
              }
            >
              My Github ↗
            </CTA>
          </div>
        </div>
      </Header>
      <Wrapper>
        <HomeSection>
          <Heading2>About me</Heading2>
          <p>Hi! my name is Julian Soto, I'm a sofware developer.</p>
        </HomeSection>
        <HomeSection>
          <Heading2>Skills</Heading2>
          <CardsSection>
            <Card>
              <h1>Programming</h1>
            </Card>
            <Card>
              <h1>Interface design</h1>
            </Card>
            <Card>
              <h1>Physics & mathematics</h1>
            </Card>
          </CardsSection>
        </HomeSection>
        <HomeSection>
          <Heading2>Portfolio</Heading2>
        </HomeSection>
        <HomeSection>
          <Heading2>Contact</Heading2>
          <a href="https://www.linkedin.com/in/juliansotop/">LinkedIn</a>
          <br />
          <a href="https://github.com/JulianSoto">GitHub</a>
          <br />
          <a href="mailto:juliansotoponce@gmail.com">
            juliansotoponce@gmail.com
          </a>
        </HomeSection>
      </Wrapper>
    </div>
  );
};

export default Home;
