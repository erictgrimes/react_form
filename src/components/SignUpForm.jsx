import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setToken(data.token);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
    console.log("hello there");
  }

  return (
    <>
      <h2>Sign Up!</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            minLength={8}
            maxLength={12}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <button>submit</button>
      </form>
    </>
  );
}
