import "./App.css";

import { ChakraProvider, Container } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pokedex from "./components/screens/pokedex";
import Navbar from "./components/common/navbar";
import React from "react";
import PokedexDetails from "./components/screens/pokedexDetails";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ChakraProvider>
            <Navbar />
            <Container maxW="container.lg">
              <Routes>
                <Route path="/" element={<Pokedex />} />
                <Route path="/pokemon/:id" element={<PokedexDetails />} />
              </Routes>
            </Container>
          </ChakraProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
