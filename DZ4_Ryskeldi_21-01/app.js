const wrapper = document.querySelector(".wrapper")

const colors = ["green", "red", "yellow", "blue"]

const req = () => {
    const request = fetch("data.json",)
        .then(response => response.json())
        .then(data => data.results.map((i) => {
            console.log(i)
            const block = document.createElement("div")
            block.setAttribute('class', 'block')

            block.style.height = "100px"
            block.style.width = "100px"
            block.style.margin = "10px"
            block.style.border = "2px solid blueviolet"
            block.style.backgroundColor = colors[i]
            block.style.textAlign = "center"

            block.innerHTML = i.name

            wrapper.append(block)
        }) )
}
req()


