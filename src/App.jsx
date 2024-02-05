import { useState } from "react";
import "./App.css";
import useFetch from "./useFetch";
import InfoCard from "./Infocard";

function App() {
  const [search, setSearch] = useState("");
  const { data, loading } = useFetch(
    `https://restcountries.com/v3.1/name/${search}?fullText=true`
  );

  let dataJSON = false;
  if (!loading) {
    if (data.status === 404 || data.message === "Page Not Found") {
      dataJSON = false;
    } else {
      dataJSON = true;
      console.log(data);
    }
  }

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {loading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <div>
            <div>
              {dataJSON ? <InfoCard data={data} /> : <>{"Found data: ❌"}</>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
