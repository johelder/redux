import { useSelector } from "react-redux";

export function Catalog(){

  const state = useSelector(state => state);

  console.log(state)

  return (
    <div>
      <h1>Catalog</h1>
    </div>
  );
}