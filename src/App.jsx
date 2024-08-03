import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalVisibile, setModalVisible] = useState(false);

  return (
    <>
    <MainHeader onOpeningModal={() => {setModalVisible(true);}} />
      <main>
        <PostList isPosting={modalVisibile} onStopPosting={() => {setModalVisible(false);}} />
      </main>
    </>
  );
}

export default App;
