function createHeaderWithText(text) {
    const main = document.querySelector('main#main');
    main.parentNode.removeChild(main);
  
    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';
    newHeader.innerHTML = `${text} is the champion`;
  
    document.body.appendChild(newHeader);
  
    return newHeader;
  }
  
  const newHeader = createHeaderWithText('YOUR-NAME');