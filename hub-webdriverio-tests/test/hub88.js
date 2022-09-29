const GamesPage = require('../pageobjects/games.page');


describe('Launch The Hub88 Page', () => {
    it('should open the homepage', async() => {
        GamesPage.open();
        //expect(GamesPage.pageHeader).toHaveTextContaining('What you can do with Hub88');
        expect(GamesPage.pageTitle).toHaveTextContaining('Hub88 - Seamless Wallet Integration | single API for casino operations');
        //let text = GamesPage.pageTitle.getText();
        //console.log(text);   
        GamesPage.GamePageText.pause({setTimeout:3000});     
    });

    it('should open games page and verify page information', async() => {
        GamesPage.GamesLink.click();
        GamesPage.GamePageText.pause({setTimeout:3000});
        expect(GamesPage.GamePageText).toHaveTextContaining('Start your casino business journey with Hub88');
        GamesPage.GamePageText.pause({setTimeout:3000});
    });
});