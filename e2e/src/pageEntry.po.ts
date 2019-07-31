import { browser, element, by, ExpectedConditions, ProtractorExpectedConditions, ElementFinder, $, promise } from 'protractor';


export class PageEntry{
    until: ProtractorExpectedConditions;

    constructor(){
        this.until=ExpectedConditions;
    }

    navigateTo(url="entry"):Promise<void>{
        browser.waitForAngularEnabled(false);
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }

    getPlate():ElementFinder{
        return $('#licence');
    }
    getDisplasement():ElementFinder{
        return $('#displacement')
    }
    getType():ElementFinder{
        return $('#vehicletype');
    }


    
    async settype(optionI: number): Promise<void> {
        // Tick to wait until options apear
        await browser.sleep(5000);
        // End tick
        const options: ElementFinder[] = await this.getType().all(by.tagName('option'));

        console.log("setTipoVehiculoOptionSelect"+options[optionI]);


        options[optionI].click();
    }

}