class carousel{

    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options
     * @param {Object} options.slidesToScroll Nombre d'element a faire defiler 
     * @param {Object} options.slidesVisible Nombre d'element visible dans un slide
     */

    //notre constructeur 
    constructor(element, options = {}){
        this.element = element
        this.options = Object.assign({}, {

            slidesToScroll: 1, 
            slidesVisible: 1
        }, options)

        this.children = [].slice.call(element.children)
        let ratio = this.children.length / this.options.slidesVisible
        let root = this.CreateDivWithClass('caroussel')
        let container = this.CreateDivWithClass('caroussel__defilment')
        container.style.width = (ratio * 100) + "%"
        root.appendChild(container)
        //nous rajoutons l'element root dans nos element avec la fonction appendChild
        this.element.appendChild(root) 
        this.children.foreach((child) => {
            let item = this.CreateDivWithClass('caroussel__item')
            item.appendChild(child)
            defilement.appendChild(item)
        })
        
    }


    /**
     * 
     * @param {string} className creation des conteneurs div pour les class
     * @returns {HTMLElement}
     */
    CreateDivWithClass (className){
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }
}

 

// cet evenement permet au code js de charger apres chargement du DOM
document.addEventListener('DOMContentLoaded', function (){

    new carousel(document.querySelector('#caroussel1'),{
        // indique le nombre d'element a scroller
        slidesToScroll: 3,
        //element visible
        slidesVisible: 3
    })
})

