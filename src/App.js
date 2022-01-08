import useTimeout from "./Hooks/useTimeout";
import "./styles.css";

export default function App() {
  const ready = useTimeout(5000);
  return <div className="App">{ready && "Ready"}</div>;
}
