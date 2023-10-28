import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <div className={"bg-background w-screen h-screen"}>
      <h1>React + TS + Tailwind + shadcdn + Vite</h1>
      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}

export default App;
