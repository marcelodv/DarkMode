// Buscando a tag <html> e colocando em uma constante
const html = document.querySelector('html')
// Buscando a tag <input type='checkbox'> e colocando em uma constante
const checkbox = document.querySelector('input[name=theme]')

// Para diminuir o código de busca do CSS, cria-se a const:
const getStyle = ( element, style ) => 
    window.getComputedStyle(element).getPropertyValue(style)

// Buscando as cores do Light Mode
const initialColors = {
    // Buscar o estilo do CSS
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text")
}
// Definindo as cores do Dark Mode
const darkMode = {
    bg: '#333333',
    bgPanel: '#434343',
    colorHeadings: '#3664FF',
    colorText: '#B5B5B5'
}

// Função para transformar e formatar a chave chamada em changeColors()
const transformKey = key => "--"+key.replace(/([A-Z])/, "-$1").toLowerCase()

// Função para troca de cores
const changeColors = (colors) => {
    // Mapear as chaves de colors(parametro) e fazer um map()
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])    
    )
}

// Adicionando Eventos ao botão (checkbox) ser mudado (change)
checkbox.addEventListener("change", ({ target }) => {
    // Se o botão tiver selecionado, ele irá executar a função changeColors()
    // Caso ele não esteja selecionado, executará do mesmo jeito a função
    // Checked = ON  -> Dark Mode
    // Checkec = OFF -> Light Mode
    target.checked ? changeColors(darkMode) :  changeColors(initialColors)
})