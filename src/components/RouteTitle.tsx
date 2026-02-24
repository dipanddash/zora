import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_TITLE = "Zora Global AI";

const RouteTitle: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Home",
      "/about": "About",
      "/services": "Services",
      "/services/it": "IT Services",
      "/services/non-it": "Non-IT Services",
      "/products": "Products",
      "/contact": "Contact Us",
      "/book-appointment": "Book Appointment",
    };

    // ✅ handle dynamic routes too
    let pageTitle =
      titles[pathname] ??
      (pathname.startsWith("/services/it/") ? "IT Services" : undefined) ??
      (pathname.startsWith("/services/non-it/") ? "Non-IT Services" : undefined) ??
      DEFAULT_TITLE;

    document.title = `${pageTitle} | ${DEFAULT_TITLE}`;
  }, [pathname]);

  return null;
};

export default RouteTitle;