//constructor function
//constructor function
function Calculadora() {

    this.display = document.querySelector('.display')

    this.start = function () {
        this.clickCapture()
    }

    this.clickCapture = function () {

        document.addEventListener('click', (e) => {

            const element = e.target

            if (element.classList.contains('btn-num')) this.addNumDisplay(element)
            if (element.classList.contains('btn-clear')) this.clear()
            if (element.classList.contains('btn-del')) this.delete()
            if (element.classList.contains('btn-eq')) this.solve()
        })

        this.addNumDisplay = (el) => {
            this.display.value += el.innerText
        }

        this.clear = () => {
            this.display.value = ''
        }

        this.delete = () => {
            this.display.value = this.display.value.slice(0, -1)
        }

        this.solve = () => {
            const eq = this.display.value
            try {
                if (!eq || eq === '') {
                    alert('erro')
                    return
                } else {
                    this.clear()
                    this.display.value = eval(eq)
                }
            } catch (err) {
                alert('erro')
                return
            }
        }
    }
}

const calc = new Calculadora()
calc.start()