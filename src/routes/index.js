import Home from "~/components/pages/Home";
import Following from "~/components/pages/Following";
import Profile from "~/components/pages/Profile";
import Upload from "~/components/pages/Upload";
import { HeaderOnly } from "~/components/layout";
import Search from "~/components/pages/Search";
 
const publicRoutes = [
    { path:'/' , component: Home },
    { path:'/Following' , component: Following },
    { path:'/Profile' , component: Profile },
    { path:'/Upload' , component: Upload , layout: HeaderOnly },
    { path:'/Search' , component: Search , layout: null },
]

const privateRoute = [

]

export { publicRoutes , privateRoute }