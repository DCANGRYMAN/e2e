const { defineConfig } = require('cypress');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Certificando-se que a chave está sendo carregada
      console.log('API Key carregada:', process.env.OPENAI_API_KEY);
      
      config.env.OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Passando a chave para o Cypress
      return config;
    },
  },
});
