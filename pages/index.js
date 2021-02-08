export async function getStaticProps() {
  const books = await fetch('http://085ae36def56.ngrok.io').then((res) =>
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
