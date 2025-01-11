import { SignUpForm } from '@/view/pages/Register/components/SignUpForm';

export default function Register() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 ">
      <SignUpForm />
    </div>
  );
}
