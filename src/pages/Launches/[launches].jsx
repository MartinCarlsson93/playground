import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Launch () {
    const router = useRouter();
    const [launchesData, setLaunchesData] = useState({});
    const { launches } = router.query;

    const url = `https://api.spacexdata.com/v3/launches/${launches}`;

    console.log(url);

    const fetchData = () => {
        if(launches) { 
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setLaunchesData(data);
          });
        }
      };

      useEffect(fetchData, [launches]);

      console.log(launchesData);

      return(
        <>
            <div>
              <h1>{launchesData.mission_name}</h1>
              <h3>{launchesData.details}</h3>
              <h3>{launchesData.launch_year}</h3>
              <img src={launchesData.links.mission_patch}/>
              <h3>{launchesData.rocket.rocket_name}</h3>
              <h3>{launchesData.rocket.rocket_type}</h3>
            </div>
        </>
      )
}

export default Launch;