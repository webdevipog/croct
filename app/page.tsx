import Image from "next/image"
import { TemplateCanvas } from "@croct/template-ui/react"
import { renderMarkdown } from "@/lib/markdown"
import { fetchContent } from "@croct/plug-next/server"

export default async function Home() {
  try {
    // Buscar conteúdo do Croct usando o slot configurado
    const {content} = await fetchContent("next15-homepage@2");
    
    return (
      <TemplateCanvas
        title="Starter Next.js 15"
        ctaLabel="Editar este conteúdo"
        ctaLink="https://app.croct.com/organizations/ipog-4216/workspaces/ipog/slots/edit/next15-homepage/2?utm_medium=cli&utm_source=template&utm_campaign=00000000.CO.DE.starter_next&utm_content=next_15&utm_term=tailwind"
        ctaTarget="_blank"
        fullScreen
        isolated
      >
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Logo do Next.js"
              width={180}
              height={38}
              priority
            />
            <ol className="list-inside space-y-2 list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              {content.instructions.map((step, index) => (
                <li key={index} className="mb-2 tracking-[-.01em]">
                  {renderMarkdown(step, {code: "bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono) font-semibold"})}
                </li>
              ))}
            </ol>

            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href={content.primaryButton.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Logo do Vercel"
                  width={20}
                  height={20}
                />
                {content.primaryButton.label}
              </a>
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href={content.secondaryButton.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.secondaryButton.label}
              </a>
            </div>
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/sobre"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="Ícone de arquivo"
                width={16}
                height={16}
              />
              Sobre Nós
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org/learn?utm_source=croct&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="Ícone de arquivo"
                width={16}
                height={16}
              />
              Aprender
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=croct&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Ícone de janela"
                width={16}
                height={16}
              />
              Exemplos
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org?utm_source=croct&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Ícone do globo"
                width={16}
                height={16}
              />
              Ir para nextjs.org →
            </a>
          </footer>
        </div>
      </TemplateCanvas>
    );
  } catch (error) {
    console.error("Erro ao buscar conteúdo do Croct:", error);
    
    // Fallback para conteúdo estático em caso de erro
    const content = {
      instructions: [
        "Comece editando `app/page.tsx`.",
        "Salve e veja suas alterações instantaneamente."
      ],
      primaryButton: {
        url: "https://vercel.com/new?utm_source=croct&utm_medium=default-template&utm_campaign=create-next-app",
        label: "Deploy agora"
      },
      secondaryButton: {
        url: "https://nextjs.org/docs?utm_source=croct&utm_medium=default-template&utm_campaign=create-next-app", 
        label: "Leia nossa documentação"
      }
    };

    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <h1 className="text-2xl font-bold">Erro ao carregar conteúdo</h1>
          <p className="text-red-600">Verifique as configurações do Croct</p>
          <pre className="text-sm bg-gray-100 p-4 rounded">{JSON.stringify(error, null, 2)}</pre>
        </main>
      </div>
    );
  }
}
