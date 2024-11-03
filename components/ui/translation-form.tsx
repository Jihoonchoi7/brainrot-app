import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import TabButton from "./ui/tab-button";
import { FileText, Image as ImageIcon, Music } from "lucide-react";

export default function TranslationForm() {
  const [activeTab, setActiveTab] = useState<"text" | "image" | "audio">("text");

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex gap-2 p-1 bg-background/5 rounded-lg w-fit">
        <TabButton
          active={activeTab === "text"}
          onClick={() => setActiveTab("text")}
        >
          <FileText className="w-4 h-4 mr-2 inline-block" />
          text
        </TabButton>
        <TabButton
          active={activeTab === "image"}
          onClick={() => setActiveTab("image")}
        >
          <ImageIcon className="w-4 h-4 mr-2 inline-block" />
          image
        </TabButton>
        <TabButton
          active={activeTab === "audio"}
          onClick={() => setActiveTab("audio")}
        >
          <Music className="w-4 h-4 mr-2 inline-block" />
          audio
        </TabButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Textarea
          placeholder="enter something..."
          className="min-h-[200px] bg-background/5 border-0 resize-none"
        />
        <div className="min-h-[200px] bg-background/5 rounded-lg"></div>
      </div>

      <div className="flex items-center gap-4">
        <select className="bg-background/5 border-0 rounded-lg px-4 py-2">
          <option>select voice</option>
        </select>
        <Button className="bg-indigo-600 hover:bg-indigo-700">translate</Button>
      </div>
    </div>
  );
} 