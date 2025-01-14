function clickElementByXPath(xpath) {
    const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element) {
        element.click();
        console.log(`Đã click vào phần tử với XPath: ${xpath}`);
    } else {
        console.log(`Không tìm thấy phần tử với XPath: ${xpath}`);
    }
}

function autoClick() {
    clickElementByXPath('/html/body/div[1]/div[3]/p-footer/button[1]/span[2]');
    setTimeout(() => {
        clickElementByXPath('/html/body/app-root/common-app-component/p-confirmdialog[1]/div/div[3]/button[1]/span[2]');
    }, 10000);
}
setInterval(autoClick, Math.random() * (5000 - 3000) + 300000);

