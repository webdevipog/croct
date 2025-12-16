# 🎯 Guia: Configurando o Slot "sobre-empresa@1" no Croct

## 📋 Problema Resolvido Temporariamente
- ✅ A página `/sobre` agora funciona com conteúdo estático
- ⏱️ Quando o slot for criado no Croct, descomente o código para usar conteúdo dinâmico

## 🚀 Próximos Passos no Painel do Croct

### 1. Acesse o Painel do Croct
- Vá para: [app.croct.com](https://app.croct.com)
- Faça login na sua conta
- Selecione a organização: `ipog-4216`
- Selecione o workspace: `ipog`

### 2. Crie o Slot "sobre-empresa"
1. **Navegue para Slots**
2. **Clique em "Create Slot" ou "Novo Slot"**
3. **Configure o slot:**
   - **Nome**: `sobre-empresa`
   - **Versão**: `1`
   - **Locales**: `pt-br`

### 3. Configure o Component "sobre-empresa-page@1"
Crie um component com a seguinte estrutura:

```json
{
  "titulo": "string",
  "subtitulo": "string", 
  "descricao": "string",
  "features": [
    {
      "titulo": "string",
      "descricao": "string",
      "icone": "string"
    }
  ],
  "chamadaAcao": {
    "titulo": "string",
    "botao": {
      "texto": "string",
      "url": "string"
    }
  }
}
```

### 4. Conteúdo de Exemplo
Use este conteúdo como exemplo:

```json
{
  "titulo": "Sobre Nossa Empresa",
  "subtitulo": "Inovação e excelência em cada projeto",
  "descricao": "Somos uma empresa dedicada a criar soluções tecnológicas inovadoras que transformam a maneira como as pessoas interagem com a tecnologia.",
  "features": [
    {
      "titulo": "Inovação",
      "descricao": "Sempre buscamos as tecnologias mais avançadas",
      "icone": "🚀"
    },
    {
      "titulo": "Qualidade",
      "descricao": "Produtos com rigorosos testes de qualidade", 
      "icone": "✨"
    },
    {
      "titulo": "Suporte",
      "descricao": "Suporte completo em todas as etapas",
      "icone": "🤝"
    }
  ],
  "chamadaAcao": {
    "titulo": "Pronto para começar?",
    "botao": {
      "texto": "Entre em Contato",
      "url": "/contato"
    }
  }
}
```

### 5. Ativar o Conteúdo Dinâmico
Após criar o slot no Croct, descomente este código em `app/sobre/page.tsx`:

```typescript
// Remova o conteúdo estático e descomente:
try {
  const {content} = await fetchContent("sobre-empresa@1");
  // Usar content do Croct
} catch (error) {
  console.error("Erro:", error);
  // Fallback para conteúdo estático
}
```

## 🔗 Links Úteis
- **Homepage**: [http://localhost:3000](http://localhost:3000)
- **Página Sobre**: [http://localhost:3000/sobre](http://localhost:3000/sobre) 
- **Croct Panel**: [app.croct.com](https://app.croct.com)

## ✅ Status Atual
- 🟢 Aplicação funcionando
- 🟢 Homepage conectada ao Croct
- 🟡 Página Sobre usando conteúdo estático
- ⏳ Aguardando criação do slot no painel