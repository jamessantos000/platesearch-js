const scraping = require('./script');

async function apiPlate(plate) {
  const browser = await scraping.launchBrowser();

  try {
    const dados = await scraping.scraping(browser, 'https://www.tabelafipebrasil.com/placa', plate);
    return dados;
  } catch (erro) {
    console.error('Erro na execução:', erro);
  } finally {
    await scraping.closeBrowser(browser);
  }
}

module.exports = { apiPlate };
