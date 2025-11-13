import Button from '../../components/Button';

function MyNotebooks() {
  return (
    <>
      <h2>My Notebooks</h2>
      <p>Here you can access all your notebooks!</p>

      <div>
        <h3>Caderno:</h3>
        <h4>Family</h4>
        <p> O </p>
        <p> O </p>
        <p> O </p>
      </div>

      <h2>You can create up to 3 notebooks!</h2>
      <Button
        onClickFunction={() => console.log('clicked')}
        text="Create notebook"
      />
    </>
  );
}

export default MyNotebooks;
