import TwitterShare from "../src/Components/TwitterShare.html"

describe('Twitter Share Component', () => {
  it('should render', () => {
    const el = document.createElement('div')
    new TwitterShare({
      target: el
    })
    expect(el.getElementsByClassName("s")).toHaveLength(0)
    expect(el.getElementsByClassName("m")).toHaveLength(1)
    expect(el.getElementsByClassName("circle")).toHaveLength(1)
  })
})

describe('Twitter Share Custom Component', () => {
  it('should render', () => {
    const el = document.createElement('div')
    let component = new TwitterShare({
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
