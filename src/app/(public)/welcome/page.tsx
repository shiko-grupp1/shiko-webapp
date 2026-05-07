import { Button } from "@/app/components/shared/Button/Button";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="grid grid-cols-[auto_1fr]">
      <div className="relative">
        <img aria-hidden="true" src="/images/signin_image.png" />
        <img className="absolute" src="/images/shikologo-white.png" alt="Shiko logo" />
      </div>
      <div>
        <h1 className="body-70">Welcome</h1>
        <p>Please log in to your account to continue.</p>

        <form>
          <div>
            <label>Email Address</label>
            <input type="text" placeholder="Type your email address" />
          </div>
          <Link href={"/welcome"}>Forgot your email address?</Link>
          <Button size="large">Continue</Button>
        </form>
      </div>
    </section>
  );
}
