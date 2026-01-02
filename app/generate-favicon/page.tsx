"use client";

import { useEffect, useRef } from "react";

export default function GenerateFavicon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 32;
    canvas.height = 32;

    // Draw white background
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 32, 32);

    // Load and draw logo
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      // Draw logo centered with padding
      const padding = 2;
      const size = 32 - padding * 2;
      ctx.drawImage(img, padding, padding, size, size);

      // Convert to data URL and set as favicon
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
      if (link) {
        link.href = dataUrl;
      }

      // Also create download link
      const downloadLink = document.getElementById("download-favicon") as HTMLAnchorElement;
      if (downloadLink) {
        downloadLink.href = dataUrl;
        downloadLink.download = "favicon.png";
        downloadLink.style.display = "block";
      }
    };
    img.src =
      "https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/blob-ff056cd.png/:/rs=w:198,h:198,cg:true,m/cr=w:198,h:198/qt=q:95";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-8">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold text-white">Favicon Generator</h1>
        <canvas ref={canvasRef} className="mb-4 border-2 border-white" />
        <p className="mb-4 text-gray-300">
          Right-click the image above and save as <code className="bg-slate-800 px-2 py-1 rounded">favicon.ico</code>
        </p>
        <a
          id="download-favicon"
          href="#"
          download="favicon.png"
          className="inline-block rounded bg-cyan-600 px-6 py-3 font-bold text-white hover:bg-cyan-700"
          style={{ display: "none" }}
        >
          Download Favicon
        </a>
        <p className="mt-4 text-sm text-gray-400">
          Place the downloaded file in the <code className="bg-slate-800 px-2 py-1 rounded">public</code> folder
        </p>
      </div>
    </div>
  );
}

