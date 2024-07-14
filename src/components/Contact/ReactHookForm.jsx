import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };
  return (
    <div className="ml-6">
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
        <button
          disabled={isSubmitting}
          className="btn btn-secondary"
          type="submit"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        {errors.root && (
          <div className="text-red-600">{errors.root.message}</div>
        )}
      </form>
    </div>
  );
};

export default ReactHookForm;
