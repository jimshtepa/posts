export async function getStaticProps() {
  const books = await fetch('http://124c62971ebc.ngrok.io').then((res) =>
    res.json()
  );

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
