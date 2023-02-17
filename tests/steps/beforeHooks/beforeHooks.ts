import { Before } from '@wdio/cucumber-framework';

Before(async () => {
    await browser.maximizeWindow();
    await browser.url("https://www.onliner.by/");
})