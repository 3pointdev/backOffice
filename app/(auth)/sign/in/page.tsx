import AuthCover from "components/auth/authCover";
import LoginForm from "components/form/loginForm";

export default function SignIn() {
  return (
    <div className="w-screen h-screen flex">
      <AuthCover />
      <section className="w-xl shrink-0">
        <LoginForm />
      </section>
    </div>
  );
}
