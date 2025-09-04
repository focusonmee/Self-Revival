import { LoginForm } from "@/components/login-form";

export default function Login() {
    return (
        <div
            className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-cover bg-center"
            style={{ backgroundImage: "url('/car.jpg')" }}
        >
            <div className="w-full max-w-sm p-4rounded-2xl shadow-lg">
                <div className="absolute inset-0 bg-black/20"></div> {/* overlay nhẹ */}
                <LoginForm />
            </div>
        </div>
    );
}
