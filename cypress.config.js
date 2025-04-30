const { defineConfig } = require('cypress');
const dotenv = require('dotenv');
const cucumber = require('@badeball/cypress-cucumber-preprocessor');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Usar a função do preprocessor do Cucumber corretamente
      cucumber.addCucumberPreprocessorPlugin(on, config);

      // Log da chave da API
      console.log('API Key carregada:', process.env.OPENAI_API_KEY);
      
      config.env.OPENAI_API_KEY = process.env.OPENAI_API_KEY;
      return config;
    },

    specPattern: 'cypress/e2e/**/*.feature', // Definir o padrão para os arquivos .feature
  },
});
