import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      subscriptionStatus: string;
      isAccredited: boolean;
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    email: string;
    name: string;
    subscriptionStatus: string;
    isAccredited: boolean;
  }
} 