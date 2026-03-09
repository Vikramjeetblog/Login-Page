export const validateSignup = (data) => {

  let errors = {}

  if (!data.name.trim()) {
    errors.name = "Full name is required"
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required"
  } 
  else if (data.phone.length !== 10) {
    errors.phone = "Phone number must be 10 digits"
  }

  if (!data.email.trim()) {
    errors.email = "Email is required"
  } 
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = "Enter a valid email address"
  }

  if (!data.password.trim()) {
    errors.password = "Password is required"
  }
  else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters"
  }

  return errors
}