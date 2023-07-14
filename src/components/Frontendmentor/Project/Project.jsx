import { Link, useParams } from "react-router-dom";

import QrCode from "../QrCode/QrCode";
import Results from "../Results/Results";
import ProductCard from "../ProductCard/ProductCard";
import InteractiveRating from "../InteractiveRating/InteractiveRating";
import NotFound from "../../NotFound/NotFound";

export default function Project() {
  const { project } = useParams();

  return (
    <div className="relative">
      <div className="bottom-4 left-4 fixed right-0 z-10">
        <Link to={`/frontendmentor`} className="text-eldengold underline">
          Back to projects
        </Link>
      </div>
      {(() => {
        switch (project) {
          case "qr-code":
            return <QrCode />;
          case "results-summary":
            return <Results />;
          case "product-preview-card":
            return <ProductCard />;
          case "interactive-rating":
            return <InteractiveRating />;
          default:
            return <NotFound />;
        }
      })()}
    </div>
  );
}
