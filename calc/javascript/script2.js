//factory function
//factory function
function calculadora() {

    return {

        display: document.querySelector('.display'),

        iniciar() {
            this.cliqueBotoes()
        },

        cliqueBotoes() {

            document.addEventListener('click', function (e) {
                let element = e.target
                if (element.classList.contains('btn-num')) {
                    this.mostraDados(element.innerText)
                }
                if (element.classList.contains('btn-clear')) {
                    this.limpaDisplay()
                }
                if (element.classList.contains('btn-del')) {
                    this.corrigir()
                }
                if (element.classList.contains('btn-eq')) {
                    this.calcular()
                }
            }.bind(this))

        },

        mostraDados(innertext) {
            this.display.value += innertext
        },

        limpaDisplay() {
            this.display.value = ''
        },

        corrigir() {
            this.display.value = this.display.value.slice(0, -1)
        },

        calcular() {
            let calculo = this.display.value
            try {
                if (!calculo || calculo === "") {
                    alert('erro')
                    return
                } else {
                    this.limpaDisplay()
                    this.display.value = eval(calculo)
                }
            } catch (err) {
                alert('erro')
                return
            }
        }
    }
}
const criaCalc = calculadora()
criaCalc.iniciar()
