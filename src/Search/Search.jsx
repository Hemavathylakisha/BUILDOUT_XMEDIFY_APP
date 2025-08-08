import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMedicalCenters } from "../utils/api";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import SearchBar from "../components/SearchBar/SearchBar";
import FAQs from "../components/Sections/FAQs/FAQs";
import DownloadApp from "../components/Sections/DownloadApp/DownloadApp";

const Search = () => {
  const [params] = useSearchParams();
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);

  const state = params.get("state");
  const city = params.get("city");


  useEffect(() => {
  if (!state || !city) {
    setCenters([]);
    setLoading(false);
    return;
  }
  setLoading(true);
  fetchMedicalCenters(state, city).then(data => {
    setCenters(data);
    setLoading(false);
  });
}, [state, city]);

// useEffect(() => {
//   if (state && city) {
//     fetchMedicalCenters(state, city)
//       .then(data => setCenters(data))
//       .catch(console.error);
//       setLoading(false);
//   }
// }, [state, city]);

  return (
    <>
    <SearchBar />
    
    <div className="container" data-testid="hospital-list">
      {!loading && centers.length === 0 && (
  <p className="text-muted">No medical centers found for {city}, {state}.</p>
)}
      {/* <h4>{centers.length} medical centers available in {state}</h4> */}
      {loading ? <p>Loading...</p> : (
        centers.map(center => <HospitalCard key={center.id} data={center} />)
      )}
    </div>
   
    <FAQs />
    <DownloadApp />
    </>
  );
};

export default Search;