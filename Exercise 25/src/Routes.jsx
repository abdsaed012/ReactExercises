import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Categories from './pages/Categories';
import RecipeDetails from './Pages/RecipeDetails';
import RecipesCategory from './Pages/RecipesCategory';


const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        // errorElement:<err/>
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"recipes",
                element:<Recipes/>
            },
            {
                path:"categories",
                element:<Categories/>,
                children:[
                    {
                        path:":categoryId",
                        element:<RecipesCategory/>
                    }
                ]
            },
            {
                path: 'recipes/:id',
                element: <RecipeDetails />,
            }
    ]
    }
]);
export default router;