import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Noto+Sans:wght@500;700&family=Poppins:wght@600&family=Ubuntu+Mono&display=swap" rel="stylesheet" />

          {/* Icons */}
          <link rel="icon" href="./assets/images/devchallenges.png" />

          <title>Button Component</title>
        </Helmet>

        <Home />

      </HelmetProvider>
    </>
  );
}

export default App;
