import RecruitmentForm from "./components/forms/RecruitmentForm";
import Popup from "./components/popup/Popup.tsx";

function App() {
  return (
    <div>
      <h1>GoodWill 채용 지원</h1>
      <Popup imageUrl="assets/29ed93aab6b48083-sticker.png" />
      <RecruitmentForm />
    </div>
  );
}

export default App;