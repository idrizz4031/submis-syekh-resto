Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('liking a restaurant',  async ({ I }) => {
    I.waitForElement('.catalog-item', 10);
    I.seeElement('.catalog-item');
    const firstCatalog = locate('.title-catalog a').first();
    I.click(firstCatalog);

    I.waitForElement('#favorite', 5);
    I.seeElement('#favorite');
    I.click('#favorite');
    I.wait(5);
});

Scenario('Unliking a restaurant', async ({ I }) => {
    I.waitForElement('.catalog-item', 10);
    I.seeElement('.catalog-item');
    const firstCatalog = locate('.title-catalog a').first();
    I.click(firstCatalog);

    I.waitForElement('#favorite', 5);
    I.seeElement('#favorite');
    I.click('#favorite');

    I.amOnPage('/#/favorite');
    I.waitForElement('.catalog-item', 10);
    I.seeElement('.catalog-item');
    const firstCatalogFavorited = locate('.title-catalog a').first();
    I.click(firstCatalogFavorited);

    I.waitForElement('#favorited', 10);
    I.seeElement('#favorited');
    I.click('#favorited');

    I.amOnPage('/#/favorite');
    I.waitForElement('.galery', 10);
    I.wait(3);
    I.amOnPage('/');

});
