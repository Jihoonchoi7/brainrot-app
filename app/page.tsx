import TranslationForm from "@/components/translation-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-20">
          <nav className="flex gap-6">
            <a href="#" className="underline">translator</a>
            <a href="#" className="text-white/60 hover:text-white">dubbing</a>
            <a href="#" className="text-white/60 hover:text-white">studio</a>
          </nav>
          <button className="bg-indigo-600 px-4 py-2 rounded-lg flex items-center gap-2">
            log in
            <img src="/discord-mark-white.svg" alt="Discord" className="w-5 h-5" />
          </button>
        </header>

        {/* Hero */}
        <div className="text-center mb-16">
          <p className="mb-4">loved by over <span className="underline">100k</span> users worldwide</p>
          <h1 className="text-6xl font-bold mb-4">brainrot translator 🚽</h1>
          <p className="text-xl text-white/60">the most advanced AI that mogs anything into skibidi</p>
        </div>

        {/* Main Form */}
        <TranslationForm />
      </div>
    </div>
  );
}
