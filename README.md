# 💾 Passo a Passo - AsyncStorage

Este repositório contém um projeto simples desenvolvido em **React Native** com **Expo**, focado em demonstrar o uso do **AsyncStorage**. Ele serve como um guia prático para entender como persistir dados localmente em um aplicativo mobile.

---

### 🎯 Objetivo

O principal objetivo deste projeto foi aprender e aplicar os conceitos de armazenamento assíncrono de dados em dispositivos móveis utilizando o `AsyncStorage`, uma API de armazenamento de chave-valor simples e persistente.

---

### ✨ Funcionalidades Implementadas

* **Entrada de Dados:** Um campo de texto (`TextInput`) permite ao usuário digitar um nome.
* **Salvamento Persistente:** Ao clicar no botão "+", o nome digitado é salvo no `AsyncStorage`.
* **Carregamento Automático:** O aplicativo carrega e exibe automaticamente o último nome salvo no `AsyncStorage` quando é iniciado.
* **Feedback Visual:** Um alerta simples informa o usuário quando o nome é salvo com sucesso.

---

### 🚀 Tecnologias Utilizadas

* **React Native:** Framework para construção de aplicativos móveis nativos.
* **Expo:** Ferramentas e serviços para desenvolvimento React Native.
* **JavaScript:** Linguagem de programação.
* **@react-native-async-storage/async-storage:** Biblioteca para armazenamento persistente de dados.

---

### 📁 Estrutura do Projeto

A estrutura do projeto é bastante minimalista, focando no componente principal:


```
├── .expo/                   # Arquivos de configuração do Expo
├── assets/                  # (Opcional) Diretório para imagens, se houver
├── App.js                   # Componente principal que contém toda a lógica e UI do aplicativo
├── app.json                 # Configurações do aplicativo Expo
├── index.js                 # Ponto de entrada da aplicação React Native
└── package-lock.json        # Gerenciamento de dependências
```

---

### ▶️ Como Rodar o Projeto

Para testar este projeto em seu ambiente local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/anads07/passo-a-passo
    cd passo-a-passo
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou, se preferir Yarn:
    yarn install
    ```
    Certifique-se de que a biblioteca `@react-native-async-storage/async-storage` está instalada. Se não estiver, você pode instalá-la com:
    ```bash
    npm install @react-native-async-storage/async-storage
    # ou
    yarn add @react-native-async-storage/async-storage
    ```

3.  **Inicie o aplicativo Expo:**
    ```bash
    npx expo start
    ```
    Após executar este comando, uma página será aberta no seu navegador com um QR Code. Escaneie-o com o aplicativo **Expo Go** no seu celular ou use um emulador/simulador.

---

### 💡 Aprendizados Chave

Este projeto foi fundamental para compreender:

* **Persistência de Dados:** Como salvar e carregar informações no dispositivo do usuário para que elas permaneçam mesmo após o fechamento do aplicativo.
* **`AsyncStorage`:** O uso das funções `setItem` (para salvar) e `getItem` (para carregar) da biblioteca.
* **Ciclo de Vida de Componentes (Class Components):** Aplicação de `componentDidMount` para carregar dados ao iniciar e `componentDidUpdate` para salvar dados quando o estado muda.
* **Interação com o Teclado:** Como ocultar o teclado virtual após uma ação.

Este projeto demonstra minha capacidade de implementar funcionalidades de persistência de dados em aplicações mobile, um conceito essencial para a construção de apps mais robustos.
