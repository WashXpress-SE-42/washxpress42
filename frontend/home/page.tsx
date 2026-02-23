export default function HomeAlias() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold">Home</h1>
        <p className="mt-4 opacity-80">
          This is an alias route for "/". You can remove it later and link
          to the root path, but it is provided now to satisfy the navbar link.
        </p>
      </div>
    </div>
  );
}
