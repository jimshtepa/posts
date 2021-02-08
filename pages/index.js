export async function getStaticProps() {
  const books = await fetch('http://031f7363225c.ngrok.io').then((res) =>
    res.json()
  );

  // console.log(books);
  return {
    props: {
      books,
    },
    revalidate: 1,
  };
}

export default function Home({ books }) {
  // console.log(books);
  // return <p>hello</p>;
  return books.map((b) => <li key={b.id}>{b.title}</li>);
}
