import { Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./Routes/Movies";
import Search from "./Routes/Search";
import Home from "./Routes/Home";
import { AuthContextProvider } from "./Components/LandingPage/Components/AuthContext";
import Protective from "./Components/Movies/Components/Protective";
import { useState, useEffect } from "react";
// import DotLoader
// from "react-spinners/DotLoader";
import { FlapperSpinner } from "react-spinners-kit";


function App() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  
  return (
    <div className="loadout" >
      {Loading ? (
        <div className="preloader">
          <FlapperSpinner 
            color={"#F8223B"}
            loading={Loading}
            // cssOverride={override}
            size={100}
          />
        </div>
      ) : (
        <div >
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/movies"
                element={
                  <Protective>
                    <Movies />
                  </Protective>
                }
              />
              <Route
                path="/search"
                element={
                  <Protective>
                    <Search />
                  </Protective>
                }
              />

            </Routes>
          </AuthContextProvider>
        </div>
      )}
    </div>
  );
}

export default App;
