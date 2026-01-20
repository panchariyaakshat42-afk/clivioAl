"use client";

import { useState } from "react";
import { Wand2, Video } from "lucide-react";

export default function CreatePage() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(""); // Store the result here

  const handleGenerate = async () => {
    try {
      setIsLoading(true);
      setVideoUrl(""); // Clear previous video

      // 1. Call the API we just created
      const response = await fetch("/api/video", {
        method: "POST",
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      // 2. Get the video URL from the response
      const data = await response.json();
      // Replicate returns an array like ["https://video.mp4"]
      setVideoUrl(data[0]); 

    } catch (error) {
      console.error(error);
      alert("Failed to generate video. Check the console for errors.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Create New Video</h1>
      
      <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8">
        <label className="block text-sm font-medium text-gray-400 mb-2">
          What is your video about?
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., A futuristic city with flying cars, cyberpunk style, cinematic lighting..."
          className="w-full h-32 bg-black border border-white/20 rounded-xl p-4 text-white placeholder-gray-600 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none text-lg"
        />
        
        <div className="mt-6 flex justify-end">
          <button 
            onClick={handleGenerate}
            disabled={!prompt || isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-bold text-lg flex items-center gap-2 transition-all"
          >
            {isLoading ? (
              <>
                <Wand2 className="w-5 h-5 animate-spin" /> Generating...
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" /> Generate Video
              </>
            )}
          </button>
        </div>
      </div>

      {/* --- VIDEO PLAYER SECTION --- */}
      {videoUrl && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Your Result</h2>
          <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl">
            <video 
              controls 
              className="w-full aspect-video bg-black" 
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-4 flex justify-end">
             <a 
               href={videoUrl} 
               target="_blank" 
               download 
               className="text-blue-400 hover:text-blue-300 text-sm font-medium"
             >
               Download Video
             </a>
          </div>
        </div>
      )}
    </div>
  );
}