export async function getStaticProps() {
  const books = await fetch('http://localhost:3001').then((res) => res.json());

  // console.log(books);
  return {
    props: {
      books,
    },
  };
}

export default function Home({ books }) {
  // console.log(books);
  // return <p>hello</p>;
  return books.map((b) => <li key={b.id}>{b.title}</li>);
}
