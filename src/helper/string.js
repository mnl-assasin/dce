export const isPassword = (string) => {
   const pattern = new RegExp(/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/)
	return pattern.test(string)
}