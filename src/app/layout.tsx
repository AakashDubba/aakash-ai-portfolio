import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aakash Dubba — Applied AI & ML Systems Engineer Portfolio",
  description:
    "Production portfolio of Aakash Dubba. Applied AI & Machine Learning Systems Engineer specializing in sub-20ms NLP classification pipelines, air-gapped local LLMs, and vector search systems.",
  keywords: [
    "Aakash Dubba",
    "Machine Learning Engineer",
    "Applied AI",
    "NLP Pipelines",
    "Ollama",
    "Llama 3",
    "FastAPI",
    "PyTorch",
    "pgvector"
  ],
  authors: [{ name: "Aakash Dubba" }],
  openGraph: {
    title: "Aakash Dubba — Applied AI & ML Systems Engineer",
    description: "Production machine learning systems that eliminate operational bottlenecks.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-accent-cyan selection:text-black">
        {children}
      </body>
    </html>
  );
}
