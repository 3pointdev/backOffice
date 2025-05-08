import AuthCover from "components/auth/authCover";
import JoinForm from "components/form/joinForm";

export default function SignUp() {
  return (
    <div className="w-screen h-screen flex">
      <AuthCover />
      <section className="w-xl shrink-0">
        <JoinForm />
      </section>
    </div>
  );
}
