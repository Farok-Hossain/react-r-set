const ReactHookForm = () => {
  return (
    <form action="" className="mt-20">
      <input
        type="text"
        placeholder="Email"
        className="border border-green-600 border-b-orange-600 mr-3 rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-green-600 border-b-orange-600 mr-3 rounded-md"
      />
      <button className="btn btn-secondary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReactHookForm;
