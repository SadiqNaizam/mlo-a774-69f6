import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Define the form schema using Zod for validation
const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, { // In a real app, use a higher minimum, e.g., 8
    message: 'Password is required.',
  }),
});

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Define the submit handler
  const onSubmit = React.useCallback((values: z.infer<typeof formSchema>) => {
    console.log('Login form submitted:', values);
    setIsLoading(true);

    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      // Here you would typically handle the API response
    }, 1500);
  }, []);

  return (
    <Card className={cn('w-96 p-6 shadow-xl bg-card rounded-lg', className)}>
      <CardHeader className="p-0 mb-8">
        <CardTitle className="text-3xl font-bold text-center text-card-foreground">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder=" " // Required for floating label to work
                      {...field} 
                      className="peer h-10 bg-transparent border-0 border-b-2 border-input rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary"
                    />
                  </FormControl>
                  <FormLabel className="absolute left-0 -top-3.5 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                    Email Address
                  </FormLabel>
                  <FormMessage className="pt-1" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder=" " // Required for floating label to work
                      {...field} 
                      className="peer h-10 bg-transparent border-0 border-b-2 border-input rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary"
                    />
                  </FormControl>
                  <FormLabel className="absolute left-0 -top-3.5 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                    Password
                  </FormLabel>
                  <FormMessage className="pt-1" />
                </FormItem>
              )}
            />
            <div className="flex justify-end -mt-4">
              <Button variant="link" type="button" className="p-0 h-auto text-sm font-normal text-secondary-foreground hover:text-primary">
                Forgot Password
              </Button>
            </div>
            <Button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-3 text-base font-semibold">
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="p-0 mt-8 flex justify-center">
        <p className="text-sm text-center text-muted-foreground">
          Don't have an account?{' '}
          <Button variant="link" className="p-0 h-auto font-semibold text-primary align-baseline">
            SignUp
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
