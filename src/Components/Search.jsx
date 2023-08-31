import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    navigate({
      pathname: "/products",
      search: `?search=${search}`,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        name="search"
        required
        value={search}
        placeholder="search"
        onChange={(event) => setSearch(event.target.value)}
      />
    </form>
  );
}
