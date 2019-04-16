import FacebookShare from "../src/Components/FacebookShare.html"

describe('Facebook Share Component', () => {
  it('should render', () => {
    const el = document.createElement('div')
    new FacebookShare({
      target: el
    })
    expect(el.getElementsByClassName("s")).toHaveLength(0)
    expect(el.getElementsByClassName("m")).toHaveLength(1)
    expect(el.getElementsByClassName("circle")).toHaveLength(1)
  })
})

describe('Facebook Share Custom Component', () => {
  it('should render', () => {
    const el = document.createElement('div')
    let component = new FacebookShare({
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
