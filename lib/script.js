const puppeteerExtra = require('puppeteer-extra');
const stealth = require('puppeteer-extra-plugin-stealth')();

puppeteerExtra.use(stealth);

const launchBrowser = async () => {
  return await puppeteerExtra.launch({ headless: true });
};

const closeBrowser = async (browser) => {
  await browser.close();
};

const scraping = async (browser, url, plate) => {
  const api = await browser.newPage();

  try{
    await api.goto(url);

    const inputPlate = await api.$('#sPlaca');
    const btnSearch = await api.$('button[type="submit"]');
    const resultApi = '.fipeTablePriceDetail';

    if (inputPlate) {
      await inputPlate.type(plate);
      await btnSearch.click();
      await api.waitForSelector(resultApi, { visible: true });

      const dataObj = await api.evaluate(() => {
        const table = document.querySelector('.fipeTablePriceDetail');
        const rows = table.querySelectorAll('tr');
        const obj = {};
  
        rows.forEach((row) => {
          const col = row.querySelectorAll('td');
          const key = col[0].textContent.trim().replace(':', '');
          const value = col[1].textContent.trim();
  
          obj[key] = value;
        });
  
        return obj;
      });
  
      return dataObj;
    } else {
      console.error('Elemento não encontrado. Verifique o seletor do campo de entrada.');
    }
  }catch(error){
    console.error('Erro ao mapear os dados:', error);
  }finally{
    await api.close();
  }
};

module.exports = {
  launchBrowser,
  closeBrowser,
  scraping,
};
