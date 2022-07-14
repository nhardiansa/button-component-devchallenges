import styled from 'styled-components'
import BtnLable from '../components/BtnLable'
import Button from '../components/Button'
import Container from '../components/Container'

const H1 = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  color: #4F4F4F;
`

export default function Home() {
  return (
    <>
      <Container>
        <H1>Buttons</H1>

        <div className="content">

          <div className="btn-section">
            <BtnLable>{"<Button />"}</BtnLable>
            <Button>
              Default
            </Button>
          </div>
          <div className="btn-section">
            <BtnLable>&:hover, &:focus</BtnLable>
            <Button focused>
              Default
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}
