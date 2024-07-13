import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="mt-20 mb-2 text-3xl">React Hook Form</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must include @";
              }
              return true;
            },
            // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          type="text"
          placeholder="Email"
          className="border border-green-600 border-b-orange-600 mr-3 rounded-md"
        />
        {errors.email && (
          <div className="text-red-600">{errors.email.message}</div>
        )}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
          type="password"
          placeholder="Password"
          className="border border-green-600 border-b-orange-600 mr-3 rounded-md"
        />
        {errors.password && (
          <div className="text-red-600">{errors.password.message}</div>
        )}
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
