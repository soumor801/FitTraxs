import axios from "axios";
import { useEffect, useState, useParams } from "react";
import TraxsLog from "./TraxsLog";

const API_URL =
  "https://api.airtable.com/v0/appApuXEvhttewhoa/Table%201?api_key=keyzjTZF2QiihjSEs";

function TraxsPage() {
  const [workoutData, setWorkoutData] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const params = useParams;
  useEffect(() => {
    const getWorkoutData = async () => {
      const resp = await axios.get(API_URL);
      setWorkoutData(resp.data.records);
    };
    getWorkoutData();
    console.log(workoutData);
  }, [toggleFetch]);
  const deleteWorkout = async (id) => {
    const resp = await axios.delete(API_URL + `&records[]=${id}`);
    setToggleFetch(!toggleFetch);
  };

  return (
    <div>
      <h1 className="traxsHeader ">TraxsPage</h1>
      <hr />
      {workoutData.map((eachWorkout) => (
        <div key={eachWorkout.id}>
          <section>
            <h2 className="traxsHeader "> {eachWorkout.fields.WorkoutName}</h2>
            <h4 className="traxsHeader " r>
              {" "}
              Reps:{eachWorkout.fields.reps}
            </h4>
            <h4 className="traxsHeader ">Sets:{eachWorkout.fields.sets}</h4>
            <button
              type="submit"
              className="btnPrimary "
              onClick={(id) => {
                deleteWorkout(eachWorkout.id);
              }}
            >
              Remove Workout
            </button>
          </section>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default TraxsPage;
