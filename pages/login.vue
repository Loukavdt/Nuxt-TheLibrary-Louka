<template>
    <div class="login-container">
      <div class="left-section">
        <h1 class="welcome-text">{{ translations[language].welcome }}</h1>
        <p class="subtext">{{ translations[language].message }}</p>
        <button @click="goToLogin" class="btn">
          {{ translations[language].login }}
        </button>
        <button @click="goToSignup" class="btn">
          {{ translations[language].signup }}
        </button>
  
        <!-- Taalwisselaar onderaan -->
        <div class="language-switcher">
          <button @click="changeLanguage('nl')">🇳🇱</button>
          <button @click="changeLanguage('en')">🇬🇧</button>
          <button @click="changeLanguage('fr')">🇫🇷</button>
        </div>
      </div>
  
   
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        language: "en", // Standaardtaal is Engels
        translations: {
          en: {
            welcome: "Welcome",
            message: "Ready for your next adventure? Log in and let’s go!",
            login: "Sign up",
            signup: "Log in",
          },
          nl: {
            welcome: "Welkom",
            message: "Klaar voor je volgende avontuur? Log in en laten we gaan!",
            login: "Registreren",
            signup: "Inloggen",
          },
          fr: {
            welcome: "Bienvenue",
            message: "Prêt pour votre prochaine aventure? Connectez-vous et c'est parti!",
            login: "S'inscrire",
            signup: "Se connecter",
          },
        },
      };
    },
    methods: {
      goToLogin() {
        window.location.href = "http://localhost:3000/login";
      },
      goToSignup() {
        window.location.href = "http://localhost:3000/signup";
      },
      changeLanguage(lang) {
        this.language = lang;
      },
    },
  };
  </script>
  
  <style>
  /* Algemene layout */
  .login-container {
    display: flex;
    height: 100vh;
    width: 100vw;
  }
  
  /* Linker sectie (tekst + buttons) */
  .left-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background-color: #ffffff;
  }
  
  .welcome-text {
    font-size: 3rem;
    font-weight: bold;
    color: #e82929; /* Roodachtige kleur zoals in de screenshot */
  }
  
  .subtext {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #000000;
  }
  
  .btn {
    width: 200px;
    padding: 12px;
    margin: 10px;
    font-size: 1rem;
    color: white;
    background-color: #e82929;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .btn:hover {
    background-color: #000000;
  }
  
  /* Taalwisselaar */
  .language-switcher {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  
  .language-switcher button {
    font-size: 24px;
    border: none;
    background: none;
    cursor: pointer;
  }


  </style>