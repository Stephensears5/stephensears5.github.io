import Cards from "../components/Cards";
import '../css/Homepage.css'

const CardParams = [
  {
    id: 1,
    title: "Create Event",
    icon: "TbCirclePlus",
    iconManifestId: "tb",
    description: "Create an event so that others can join!",
  },
  {
    id: 2,
    title: "Search Events",
    icon: "GoSearch",
    iconManifestId: "go",
    description: "Search for events in your area!",
  },
];

const HomePage = () => {
return(
    <div className="background">
        <Cards items={CardParams}/>
    </div>
)
};

export default HomePage;
