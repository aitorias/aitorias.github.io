import Card from "../Card/Card";

export default function Projects() {
  return (
    <div className="flex flex-wrap gap-4 px-4 py-4 lg:grid lg:grid-cols-2 xl:grid-cols-3 xl:px-0">
      <Card
        slug={`qr-code`}
        link={`qr-code`}
        image={`https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/qh97gysgjrzqyqlig2al.jpg`}
        title={`QR Code`}
        description={`A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.`}
      />
      <Card
        slug={`results-summary`}
        link={`results-summary`}
        image={`https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/b03akozsxsouireonkkd.jpg`}
        title={`Results summary`}
        description={`This challenge has something for everyone. It's a HTML and CSS only project, but we've also provided a JSON file of the test results for anyone wanting to practice JS.`}
      />
      <Card
        slug={`product-preview-card`}
        link={`product-preview-card`}
        image={`https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/lftjtn81b7brs2icc898.jpg`}
        title={`Product preview card`}
        description={`This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.`}
      />
    </div>
  );
}
