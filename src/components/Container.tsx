import styled from "styled-components";

const Container = styled.section`
  padding-inline: 1rem;
  
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { 
    padding-inline: 3rem;
  }
  
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    padding-inline: 4rem;
  }
`

export default Container;