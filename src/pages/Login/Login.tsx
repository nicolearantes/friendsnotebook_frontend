import Button from '../../components/Button';

function Login() {
  return (
    <>
      <h2>Login</h2>
      <form>
        <label>Email: </label>
        <input />
        <label>Password: </label>
        <input />
      </form>
      <h2>Or create your account</h2>
      <h4>You'll need an account to create a book</h4>

      <form>
        <label>What's your email?</label>
        <input />
        <label>Password: </label>
        <input />
        <label>Confirm password: </label>
        <input />
      </form>

      <p>After clicking in the button you'll receive an email</p>

      <Button
        onClickFunction={() => console.log('click')}
        text="Create account"
      />
    </>
  );
}

export default Login;
