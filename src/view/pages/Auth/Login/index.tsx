import { CardForm } from "@/view/pages/Auth/Login/components/CardForm";


export default function Login() {
  return (
    <div className="flex min-h-svh flex-col items-center  bg-cover justify-center gap-6 p-6 md:p-10">
      <div className="w-full flex justify-center ">
        <CardForm />
      </div>
    </div>
  );
}
