export const ContactUs = () => {
  return (
    <div>
      <h3>Contact Us</h3>
      <form>
        <div classname="mb-3">
          <label for="exampleInputEmail1" classname="form-label">
            Email address
          </label>
          <input
            type="email"
            classname="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" classname="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div classname="mb-3">
          <label for="exampleInputPassword1" classname="form-label">
            Password
          </label>
          <input
            type="password"
            classname="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div classname="mb-3 form-check">
          <input
            type="checkbox"
            classname="form-check-input"
            id="exampleCheck1"
          />
          <label classname="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" classname="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
