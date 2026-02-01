interface PageProps {
  searchParams: Promise<{ message: string }>;
}

export default async function Signup({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  return (
    <div className="bg-black flex min-h-screen items-center justify-center">
      <div className="w-full text-center mx-auto pt-8">
        <p className="text-foreground text-teal-400 font-bold capitalize">
          {params.message}
        </p>
      </div>
    </div>
  );
}