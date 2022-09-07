import "./App.css";
import {
    Container,
    Nav,
    Navbar,
    Figure,
    Row,
    Col,
    Button,
} from "react-bootstrap";
import Quiz from "./components/Quiz";
import Api from "./components/Api";
import Home from "./components/Home";
import StartQuiz from "./components/StartQuiz";
import ScoreQuiz from "./components/ScoreQuiz";

import { Route, Routes, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        className="text-warning ps-4"
                    >
                        <h4>preguntAPI</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to="/">
                                <h4>Home</h4>
                            </Nav.Link>
                            <Nav.Link as={Link} to="quiz">
                                <h4>Quiz</h4>
                            </Nav.Link>
                            <Nav.Link as={Link} to="api">
                                <h4>API</h4>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <a
                    href="https://github.com/"
                    target="_blank"
                    className="text-warning ps-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="quiz" element={<Quiz />} />
                <Route path="api" element={<Api />} />
                <Route
                    path="startQuiz/:category/:limit"
                    element={<StartQuiz />}
                />
                <Route path="scoreQuiz/:score" element={<ScoreQuiz />}></Route>
            </Routes>

            <footer className="w-100 bg-dark position-fixed bottom-0 p-2">
                <h4 className="text-white-50 text-center">
                    www.quizprogramming.world
                </h4>
            </footer>
        </div>
    );
}

export default App;
