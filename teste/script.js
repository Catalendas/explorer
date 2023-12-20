import axios from "axios"
import * as cheerio  from "cheerio"
import puppeteer from "puppeteer"


(async () => {

  const browser = await puppeteer.launch({ headless: 'new'})
  const page = await browser.newPage()
  await page.goto('https://www.eneba.com/br/store/all?drms[]=xbox&page=1&regions[]=argentina&regions[]=turkey&regions[]=middle_east&types[]=game')


  // const t = await page.waitForSelector(".YLosEL")
  const data = await page.evaluate(() => {
    return document.querySelectorAll(".pFaGHa").length
  })

  console.log(data)
  await browser.close()
})()


