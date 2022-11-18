import HOC from "../components/HOC";
import Cards from "./CardPages";

const Home = () => {
  return (
    <HOC>
      <h1>Halaman Home</h1>
      <Cards title="Judul 1" subtitle="judul1" />
      <Cards title="Judul 2" subtitle="judul2" />
      <Cards title="Judul 3" subtitle="judul3" />
      <Cards title="Judul 4" subtitle="judul4" />
      <Cards title="Judul 5" subtitle="judul5" />
    </HOC>
  );
};

export default Home;
