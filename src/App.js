import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/login/Login";
import TodoForm from "./components/todo/form/TodoForm";
import TodoList from "./components/todo/list/TodoList";
import "./App.scss";
import { UserInfosProvider } from "./components/userInfos/useUserInfos";

function App() {
  return (
    <BrowserRouter>
      <UserInfosProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route>
            <Layout>
              <Switch>
                <Route exact path="/" component={TodoList} />
                <Route exact path="/add" component={TodoForm} />
                <Route exact path="/update/:id" component={TodoForm} />
                <Redirect to="/" />
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </UserInfosProvider>
    </BrowserRouter>
  );
}

export default App;
