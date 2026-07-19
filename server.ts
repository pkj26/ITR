import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import compression from "compression";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable text compression for all responses (HTML, CSS, JS, SVG, XML, JSON, etc.)
  app.use(compression());

  // API health route (first to avoid conflict)
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production with aggressive caching
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, {
      maxAge: '1y',
      immutable: true,
      setHeaders: (res, filePath) => {
        // Only cache hashed assets forever. HTML, XML, JSON, TXT should not be cached forever.
        if (filePath.endsWith('.html') || filePath.endsWith('.xml') || filePath.endsWith('.txt') || filePath.endsWith('.json')) {
          res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        } else {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
      }
    }));
    
    // Redirect all remaining routes to index.html for React Router to handle
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Error starting server:", err);
});
