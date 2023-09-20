export default function validateForm(
  email?: string,
  password?: string,
  confirmPassword?: string
) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email?.match(validRegex)) {
    if (password?.length > 5) {
      if (confirmPassword) {
        if (password === confirmPassword) {
          return "success";
        } else {
          return { error: "The passwords must match" };
        }
      } else {
        return "success";
      }
    } else {
      return { error: "Password must be at least 6 characters" };
    }
  } else {
    return { error: "Invalid Email Address" };
  }
}
