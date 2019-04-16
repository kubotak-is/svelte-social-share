import HatenaShare from "../src/Components/HatenaShare.html"

describe('Hatena Share Component', () => {
  it('should render', () => {
    const el = document.createElement('div')
    new HatenaShare({
      target: el
    })
    expect(el.getElementsByClassName("s")).toHaveLength(0)
    expect(el.getElementsByClassName("m")).toHaveLength(1)
    expect(el.getElementsByClassName("circle")).toHaveLength(1)
  })
})

describe('Hatena Share Custom Component', () => {
  it('should render', () => {
    const el = document.createElement('div')
    let component = new HatenaShare({
      target: el
    })
    component.set({
      type: "square",
      size: "l"
    })
    expect(el.getElementsByClassName("s")).toHaveLength(0)
    expect(el.getElementsByClassName("l")).toHaveLength(1)
    expect(el.getElementsByClassName("square")).toHaveLength(1)
  })
})
