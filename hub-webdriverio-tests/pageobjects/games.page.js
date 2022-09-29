

const Page = require('./page');


class GamesPage extends Page {
   /*get pageHeader (){
        return $("//div[@class='jsx-3289334701 block-title']//h2[@class='jsx-949508830']");
    }
   */
    get pageTitle(){
        return $("/html/head/title");
    }
    get GamesLink() {
        return $("//div[@class='jsx-2075928239 nav']//a[@href='/games' and @class='jsx-2956011869']");
    }

    get GamePageText() {
        return $("//h2[@class='jsx-1619188360 title']");
    }
}

module.exports = new GamesPage
