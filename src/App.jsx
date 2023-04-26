import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { TweetListPage } from "./pages/Tweets/TweetListPage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import "./App.css";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<TweetListPage />} />
      </Route>
    </Routes>
  );
};
