'use client';


import { 
  SignInButton, 
  SignUpButton, 
  SignedIn, 
  SignedOut, 
  UserButton 
} from "@clerk/nextjs";
import Link from "next/link";


import React, { useState } from 'react';
import { 
  Play, 
  Wand2, 
  Type, 
  Layers, 
  Share2, 
  CheckCircle, 
  Menu, 
  X, 
  ArrowRight,
  Video
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Video className="text-white w-5 h-5" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Clivio</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              
              {/* --- CLERK LOGIC START --- */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-gray-300 hover:text-white text-sm font-medium transition cursor-pointer">
                    Login
                  </button>
                </SignInButton>
                
                <SignUpButton mode="modal">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] cursor-pointer">
                    Try Clivio Free
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <Link href="/dashboard">
                  <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full text-sm font-medium mr-2 transition cursor-pointer">
                    Dashboard
                  </button>
                </Link>
                <UserButton />
              </SignedIn>
              {/* --- CLERK LOGIC END --- */}

            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">How it Works</a>
            
            <SignedOut>
              <SignInButton mode="modal">
                 <button className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="w-full mt-2 bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium">Sign Up Free</button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
               <Link href="/dashboard" className="w-full text-left text-white bg-zinc-800 block px-3 py-2 rounded-md text-base font-medium mb-2">
                 Go to Dashboard
               </Link>
               <div className="px-3 py-2">
                 <UserButton />
               </div>
            </SignedIn>

          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [prompt, setPrompt] = useState('');

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">New: AI Voice Cloning 2.0</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Text to Video, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Instantly.</span>
        </h1>
        
        <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Clivio turns your ideas into production-ready videos. Just type a topic, and our AI writes the script, creates scenes, and adds voiceovers.
        </p>

        {/* Interactive Input Simulation */}
        <div className="max-w-3xl mx-auto bg-zinc-900/80 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-2">
            <input 
              type="text" 
              placeholder="Describe your video (e.g., 'A 30s promo for a coffee shop in cyberpunk style')" 
              className="flex-1 bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 px-4 py-3 text-lg outline-none w-full"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            
            {/* --- HERO BUTTON LOGIC --- */}
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                  <Wand2 className="w-5 h-5" />
                  Generate Video
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <Link href="/dashboard">
                <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                  <Wand2 className="w-5 h-5" />
                  Generate Video
                </button>
              </Link>
            </SignedIn>
             {/* ------------------------- */}

          </div>
        </div>
        
        <p className="mt-4 text-sm text-gray-500">No credit card required · Free trial available</p>

        {/* UI Mockup / Video Placeholder */}
        <div className="mt-16 relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-zinc-900/50 overflow-hidden shadow-2xl aspect-video group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
            <div className="flex gap-2 mb-2">
              <span className="bg-blue-600 text-xs text-white px-2 py-1 rounded">AI Generated</span>
              <span className="bg-zinc-800 text-xs text-gray-300 px-2 py-1 rounded">1080p</span>
            </div>
            <p className="text-white font-medium">"Top 10 Travel Destinations in 2025"</p>
          </div>
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700">
            [Video Player Placeholder]
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-colors group">
    <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-colors">
      <Icon className="w-6 h-6 text-gray-300 group-hover:text-blue-400" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything you need to go viral</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stop wrestling with complex timelines. Clivio gives you a professional editing suite powered by generative AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Type} 
            title="Text to Video" 
            desc="Transform blog posts, articles, or simple text prompts into engaging videos with stock footage automatically selected for you."
          />
          <FeatureCard 
            icon={Layers} 
            title="AI Stock Media" 
            desc="Access over 8 million premium stock assets. Our AI searches and stitches the perfect clips to match your script."
          />
          <FeatureCard 
            icon={Wand2} 
            title="Magic Edit" 
            desc="Don't like a scene? Just type 'Make this scene darker' or 'Change the background to a forest' and watch it happen."
          />
          <FeatureCard 
            icon={Share2} 
            title="Multi-Platform Resize" 
            desc="Convert one video into landscape, portrait, and square formats for YouTube, TikTok, and Instagram with one click."
          />
          <FeatureCard 
            icon={Video} 
            title="AI Avatars" 
            desc="Choose from 50+ hyper-realistic AI presenters to deliver your message. No cameras or actors needed."
          />
          <FeatureCard 
            icon={CheckCircle} 
            title="Human-Like Voiceovers" 
            desc="Narrate your videos with ultra-realistic AI voices in multiple languages and accents."
          />
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Simple pricing, powerful results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 flex flex-col">
            <div className="mb-4">
              <span className="text-white text-xl font-bold">Free</span>
            </div>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold text-white">$0</span>
              <span className="text-gray-400 ml-2">/month</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">Perfect for testing the waters and creating short clips.</p>
            <ul className="space-y-4 mb-8 flex-1 text-left">
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 10 mins of AI generation/wk
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Clivio Watermark
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 720p Exports
              </li>
            </ul>
            <SignUpButton mode="modal">
                <button className="w-full py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors cursor-pointer">
                Start Free
                </button>
            </SignUpButton>
          </div>

          {/* Pro Plan */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-blue-600/50 relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-blue-900/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
              Most Popular
            </div>
            <div className="mb-4">
              <span className="text-white text-xl font-bold">Creator</span>
            </div>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold text-white">$20</span>
              <span className="text-gray-400 ml-2">/month</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">For content creators growing their social channels.</p>
            <ul className="space-y-4 mb-8 flex-1 text-left">
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 50 mins of AI generation/mo
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> No Watermarks
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 1080p Exports
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Access to Premium Stock
              </li>
            </ul>
            <SignUpButton mode="modal">
                <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg cursor-pointer">
                Get Creator
                </button>
            </SignUpButton>
          </div>

          {/* Business Plan */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-white/10 flex flex-col">
            <div className="mb-4">
              <span className="text-white text-xl font-bold">Business</span>
            </div>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold text-white">$48</span>
              <span className="text-gray-400 ml-2">/month</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">For agencies and teams requiring scale.</p>
            <ul className="space-y-4 mb-8 flex-1 text-left">
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 200 mins of AI generation/mo
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> 4K Exports
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Multi-user workspace
              </li>
              <li className="flex items-center text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> Custom Brand Kits
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors cursor-pointer">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <Video className="text-white w-3 h-3" />
              </div>
              <span className="text-white font-bold text-lg">Clivio</span>
            </div>
            <p className="text-gray-500 text-sm">
              The fastest way to create video content. Powered by next-gen AI.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-500">Text to Video</a></li>
              <li><a href="#" className="hover:text-blue-500">AI Video Editor</a></li>
              <li><a href="#" className="hover:text-blue-500">Voice Cloning</a></li>
              <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500">Community</a></li>
              <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Clivio AI Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// --- Main Page Component ---

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Social Proof Strip */}
      <div className="border-y border-white/5 bg-zinc-950/50 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-widest">Trusted by 10,000+ Creators</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Text Placeholders for Logos to avoid external assets */}
            <span className="text-xl font-bold text-white">NETFLIX</span>
            <span className="text-xl font-bold text-white">Google</span>
            <span className="text-xl font-bold text-white">Amazon</span>
            <span className="text-xl font-bold text-white">Shopify</span>
            <span className="text-xl font-bold text-white">Forbes</span>
          </div>
        </div>
      </div>

      <Pricing />
      
      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to create your first viral video?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of creators using Clivio to automate their content production.</p>
          
          {/* --- CTA BUTTON LOGIC --- */}
          <SignedOut>
             <SignUpButton mode="modal">
                <button className="bg-white text-black text-lg px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-transform hover:scale-105 shadow-xl flex items-center gap-2 mx-auto cursor-pointer">
                    Start Generating For Free <ArrowRight className="w-5 h-5" />
                </button>
             </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Link href="/dashboard">
                <button className="bg-white text-black text-lg px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-transform hover:scale-105 shadow-xl flex items-center gap-2 mx-auto cursor-pointer">
                    Go to Dashboard <ArrowRight className="w-5 h-5" />
                </button>
            </Link>
          </SignedIn>
          {/* ------------------------ */}

        </div>
      </section>

      <Footer />
    </main>
  );
}