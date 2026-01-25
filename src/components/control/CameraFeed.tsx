import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../ui/Card';
import { Camera, Maximize2, Circle, Laptop, ScanEye, X } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const FEED_URL = "http://10.46.158.50/stream";
// Note: In a real production app, use import.meta.env.VITE_GEMINI_API_KEY
const API_KEY = "AIzaSyB7beRjR852037RvXWthDQryXrE7yFN26oJ";

export const CameraFeed: React.FC = React.memo(() => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [time, setTime] = useState("");
    const [source, setSource] = useState<'stream' | 'local'>('stream');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [aiReport, setAiReport] = useState<string | null>(null);

    // Update time
    useEffect(() => {
        const updateTime = () =>
            setTime(new Date().toLocaleTimeString());

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Auto-reconnect stream if ESP32 drops (only when in stream mode)
    const handleError = () => {
        if (source !== 'stream' || !imgRef.current) return;
        imgRef.current.src = "";
        setTimeout(() => {
            if (imgRef.current && source === 'stream') {
                imgRef.current.src = FEED_URL;
            }
        }, 1000);
    };

    // Handle Local Camera Stream
    useEffect(() => {
        let stream: MediaStream | null = null;

        if (source === 'local') {
            const startCamera = async () => {
                try {
                    stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                } catch (err) {
                    console.error("Error accessing webcam:", err);
                    setAiReport("Error: Could not access webcam. Please check permissions.");
                }
            };
            startCamera();
        }

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, [source]);

    // AI Analysis Function
    const analyzeFrame = async () => {
        if (source !== 'local' || !videoRef.current) {
            setAiReport("Please switch to 'Laptop Camera' to use AI Analysis.");
            return;
        }

        setIsAnalyzing(true);
        setAiReport(null);

        try {
            // Capture frame from video to canvas
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const ctx = canvas.getContext('2d');
            if (!ctx) throw new Error("Could not create canvas context");

            ctx.drawImage(videoRef.current, 0, 0);
            const base64Data = canvas.toDataURL('image/jpeg', 0.8).split(',')[1];

            // Initialize Gemini
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const prompt = "Analyze this image from a rover sensor feed. Identify objects, obstacles, and provide a concise sensor report suitable for navigation or maintenance.";

            const result = await model.generateContent([
                prompt,
                { inlineData: { data: base64Data, mimeType: "image/jpeg" } }
            ]);

            setAiReport(result.response.text());

        } catch (error) {
            console.error("AI Analysis failed:", error);
            setAiReport("Failed to generate AI report. Check console/network.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <Card className="h-full relative overflow-hidden flex flex-col" noPadding>

            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between z-10 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                        onClick={() => setSource(prev => prev === 'stream' ? 'local' : 'stream')}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors border border-white/10"
                        title="Switch Camera Source"
                    >
                        {source === 'stream' ? <Camera size={18} /> : <Laptop size={18} />}
                        <span className="text-sm font-medium">
                            {source === 'stream' ? 'ESP32 Stream' : 'Laptop Camera'}
                        </span>
                    </button>

                    <div className="flex items-center gap-1 bg-green-500/20 px-2 py-0.5 rounded-full border border-green-500/50">
                        <Circle size={8} className="text-green-500 fill-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-green-400">LIVE</span>
                    </div>
                </div>

                <div className="flex gap-2 pointer-events-auto">
                    {source === 'local' && (
                        <button
                            onClick={analyzeFrame}
                            disabled={isAnalyzing}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-white backdrop-blur-sm transition-all border border-purple-500/30 ${isAnalyzing
                                    ? 'bg-purple-900/50 cursor-wait'
                                    : 'bg-purple-600/80 hover:bg-purple-600'
                                }`}
                        >
                            <ScanEye size={18} className={isAnalyzing ? "animate-pulse" : ""} />
                            <span className="text-sm font-bold">{isAnalyzing ? 'Scanning...' : 'AI Scan'}</span>
                        </button>
                    )}
                    <button className="text-white bg-black/30 hover:bg-black/50 p-1.5 rounded-full transition-colors">
                        <Maximize2 size={18} />
                    </button>
                </div>
            </div>

            {/* Main Visual Feed */}
            <div className="flex-1 w-full bg-slate-900 relative">
                {source === 'stream' ? (
                    <div className="w-full h-full flex items-center justify-center">
                        <img
                            ref={imgRef}
                            src={FEED_URL}
                            alt="ESP32 Live Stream"
                            className="w-full h-full object-contain"
                            onError={handleError}
                        />
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="w-full h-full object-contain transform scale-x-[-1]" // Mirror effect for webcam
                        />
                    </div>
                )}

                {/* AI Report Overlay */}
                {aiReport && (
                    <div className="absolute inset-x-4 bottom-14 z-20 animate-in slide-in-from-bottom-5 fade-in duration-300">
                        <div className="bg-black/80 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 shadow-2xl relative">
                            <button
                                onClick={() => setAiReport(null)}
                                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                            >
                                <X size={16} />
                            </button>
                            <div className="flex items-start gap-3">
                                <ScanEye className="text-purple-400 shrink-0 mt-1" size={20} />
                                <div className="space-y-1">
                                    <h4 className="text-purple-400 text-xs font-bold uppercase tracking-wider">AI Sensor Report</h4>
                                    <p className="text-gray-200 text-sm leading-relaxed max-h-32 overflow-y-auto pr-2 custom-scrollbar whitespace-pre-line">
                                        {aiReport}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="bg-black z-30 text-gray-300 text-xs px-4 py-2 flex justify-between shrink-0 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${source === 'local' ? 'bg-blue-500' : 'bg-green-500'}`}></span>
                    {source === 'stream' ? 'IP Camera Protocol (MJPEG)' : 'Local Optical Sensor (Webcam)'}
                </span>
                <span className="font-mono text-gray-500">{time}</span>
            </div>
        </Card>
    );
});
