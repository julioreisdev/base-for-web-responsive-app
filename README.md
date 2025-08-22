# Base for Web Responsive App

Bem-vindo ao **Base for Web Responsive App**! Este projeto é uma base completa e pronta para uso, ideal para desenvolvedores que desejam iniciar rapidamente a construção de aplicações web responsivas. Ele elimina a necessidade de configurar a estrutura inicial do zero, permitindo que você foque no desenvolvimento da lógica de negócio da sua aplicação.

---

## Recursos Inclusos

Este projeto já vem com uma estrutura robusta e funcional, incluindo:

- **Páginas Essenciais:** Telas de login, cadastro e base para dashboard
- **Dashboard com Layout Completo:** Um layout de dashboard com `sidebar` lateral, `header` e área principal, ideal para a maioria das aplicações.
- **Modo Dark:** Suporte nativo para modo escuro (`dark mode`), proporcionando uma melhor experiência de usuário.
- **Estrutura de Roteamento:** Configuração completa de roteamento para navegação entre as páginas.
- **Lazy Loading:** Implementação de lazy loading para carregar os módulos de forma assíncrona, melhorando a performance da aplicação.
- **Componentização:** Uma estrutura de componentes organizada, facilitando a reutilização de código e a manutenção.
- **Context API:** Estrutura de `context` para gerenciar o estado global da aplicação de forma eficiente.
- **Tecnologias Modernas:** Desenvolvido com **React** e **Vite**, garantindo um ambiente de desenvolvimento rápido e moderno.
- **Login Facilitado:** Desenvolvido com o Google OAuth.

---

## Como Começar

Para usar este projeto como base para a sua aplicação, siga os passos abaixo.

### Pré-requisitos

Certifique-se de ter o `Node.js` e o `npm` instalados em sua máquina.

### Instalação e Execução

1. **Clone o repositório:**

    ```bash
    git clone [https://github.com/julioreisdev/base-for-web-responsive-app.git](https://github.com/julioreisdev/base-for-web-responsive-app.git)
    cd base-for-web-responsive-app
    ```

2. **Instale as dependências:**

    ```bash
    npm i --force
    ```

3. **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    Após a execução, a aplicação estará disponível em `http://localhost:5173` (ou em outra porta, conforme a configuração do Vite).

---

## Estrutura de Rotas

- **/**: Login
- **/signup**: Cadastro
- **/whatsapp-verify**: Confirmar código de WhatsApp
- **/restore-password**: Recuperar acesso
- **/home**: Página inicial

---

## Estrutura do Projeto

```
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 node_modules/ 🚫 (auto-hidden)
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 auth/
│   │   │   ├── 📄 google-oauth.tsx
│   │   │   ├── 📄 protected-route.tsx
│   │   │   └── 📄 unprotected-route.tsx
│   │   ├── 📁 lotties/
│   │   │   ├── 📄 login1.json
│   │   │   ├── 📄 login2.json
│   │   │   ├── 📄 login3.json
│   │   │   └── 📄 login4.json
│   │   ├── 📁 sidebar/
│   │   │   └── 📄 sidebar.tsx
│   │   └── 📁 style/
│   │       ├── 📁 icons/
│   │       │   └── 📄 icons.tsx
│   │       ├── 📄 body-general-content.ts
│   │       ├── 📄 center-box.ts
│   │       ├── 📄 flex-bet-box.ts
│   │       ├── 📄 flex-end-box.ts
│   │       ├── 📄 input.tsx
│   │       ├── 📄 inputs.ts
│   │       └── 📄 lazy-loading.tsx
│   ├── 📁 contexts/
│   │   └── 📄 global-context.tsx
│   ├── 📁 interfaces/
│   │   ├── 📄 google-oauth.interface.ts
│   │   ├── 📄 ipinfo.interface.ts
│   │   └── 📄 theme.interface.ts
│   ├── 📁 pages/
│   │   ├── 📁 auth/
│   │   │   ├── 📄 login-page.tsx
│   │   │   ├── 📄 restore-password-page.tsx
│   │   │   ├── 📄 sign-up-page.tsx
│   │   │   └── 📄 verify-code-page.tsx
│   │   └── 📁 dashboard/
│   │       └── 📁 home/
│   │           └── 📄 index.tsx
│   ├── 📁 utils/
│   │   ├── 📄 auth.ts
│   │   ├── 📄 colors-theme.ts
│   │   ├── 📄 ip-info.ts
│   │   ├── 📄 login-lotties.tsx
│   │   ├── 📄 random.ts
│   │   ├── 📄 sidebar-list.ts
│   │   └── 📄 strings.ts
│   ├── 📄 App.tsx
│   ├── 🎨 config.css
│   ├── 📄 main.tsx
│   ├── 📄 router.tsx
│   └── 📄 vite-env.d.ts
├── 🔒 .env 🚫 (auto-hidden)
├── 📄 .env.example
├── 🚫 .gitignore
├── 📖 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── 📄 package-lock.json 🚫 (auto-hidden)
├── 📄 package.json
├── 📄 tsconfig.app.json
├── 📄 tsconfig.json
├── 📄 tsconfig.node.json
└── 📄 vite.config.ts
```

---

## Contribuição

Sinta-se à vontade para abrir `issues` ou enviar `pull requests` se encontrar algum problema ou tiver sugestões para melhorar o projeto.

---

## Licença

Este projeto está sob a licença [MIT License](https://opensource.org/licenses/MIT).
