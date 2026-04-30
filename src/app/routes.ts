import { createBrowserRouter } from "react-router";
import Layout from "./pages/layout";
import BlogHome from "./pages/blog-home";
import AllBlogs from "./pages/all-blogs";
import ArticlePage from "./pages/article-page";
import Categories from "./pages/categories";
import About from "./pages/about";
import Contact from "./pages/contact";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import NotFound from "./pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: BlogHome },
      { path: "blog", Component: AllBlogs },
      { path: "article/:id", Component: ArticlePage },
      { path: "categories", Component: Categories },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      { path: "*", Component: NotFound },
    ],
  },
]);