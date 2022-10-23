import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Min from './components/Min/Min';
import Quiz from './components/Quiz/Quiz';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import QuizChart from './components/QuizChart/QuizChart';
import NotFound from './components/NotFound/NotFound';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Min></Min>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: 'quiz/:quizID',
          loader: async ({params}) =>  fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`),
          element: <Quiz></Quiz>
        },
        {
          path: 'chart',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <QuizChart></QuizChart>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
