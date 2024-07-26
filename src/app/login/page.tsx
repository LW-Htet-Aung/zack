'use client'
import GoogleLogo from "@/assets/icons/GoogleLogo";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { createClient } from "@/ultis/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Provider } from "@supabase/supabase-js";
import { Github, Slack } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface pageProps {
}
const Login = () => {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const formSchema = z.object({
        email: z.string().email().min(2, { message: 'Email must be 2 characters' }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        },
    });

    // async function onSubmit(values: z.infer<typeof formSchema>) {
    //     setIsAuthenticating(true);
    //     const response = await registerWithEmail(values);
    //     const { data, error } = JSON.parse(response);
    //     setIsAuthenticating(false);
    //     if (error) {
    //         console.warn('Sign in error', error);
    //         return;
    //     }
    // }

    async function socialAuth(provider: Provider) {
        setIsAuthenticating(true);
        await createClient().auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        });
        setIsAuthenticating(false);
    }
    return (
        <div className="min-h-screen p-5 grid text-center place-content-center bg-white">
            <div className="max-w-[450px]" >
                <div className="flex justify-center items-center gap-3 mb-4">
                    <Slack size={30} />
                    <Typography text='Zack' variant="h2" />
                </div>
                <Typography text='Sign in to your Zack' variant="h2" className="mb-3" />
                <Typography text='We suggest using the email address that you use at work' variant="p" className="mb-7 opacity-90" />
                <div className="flex flex-col space-y-4">
                    <Button onClick={() => socialAuth('google')} variant='outline' className="py-6 border-2 flex space-x-3">
                        <GoogleLogo className="w-5 h-5" />
                        <Typography text='Sign in with Google' variant="p" className="text-xl" />
                    </Button>
                    <Button onClick={() => socialAuth('github')} variant='outline' className="py-6 border-2 flex space-x-3">
                        <Github className="w-5 h-5" />
                        <Typography text='Sign in with Github' variant="p" className="text-xl" />
                    </Button>
                </div>

            </div>
        </div>
    );
};
export default Login