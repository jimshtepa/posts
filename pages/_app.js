import '../styles/globals.css';

function MyApp({ Component, props }) {
  return (
    <div>
      <Component props={props} />
    </div>
  );
}

export default MyApp;
