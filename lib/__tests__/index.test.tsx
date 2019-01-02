import * as React from 'react'
import { shallow, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16';
import Matrix from '../index'

configure({adapter: new Adapter()});

describe('Matrix', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Matrix />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should get correct className', () => {
    const Item = (props: any) => {
      const { src } = props
      return (
        <div className="text">{src.a}</div>
      )
    }

    const dataSources = [
      {a: 1}, {a : 2}, {a: 3},
      {a: 1}, {a : 2}, {a: 3},
      {a: 1}, {a : 2}, {a: 3},
    ]
    const wrapper = shallow(<Matrix dataSources={dataSources}><Item /></Matrix>)
    const wrapper1 = shallow(<Matrix dataSources={dataSources} length={5}><Item /></Matrix>)
    expect(wrapper.find('.matrix').length).toBe(1)
    expect(wrapper.find('.matrix-row').length).toEqual(3)
    expect(wrapper.find('.matrix-row-item').length).toBe(12)
    expect(wrapper.find('.item-blank').length).toBe(3)
    expect((wrapper.instance().props as any).length).toBe(4)
    expect((wrapper1.instance().props as any).length).toBe(5)
    expect(wrapper1.find('.matrix-row').length).toEqual(2)
    expect(wrapper1.find('.matrix-row-item').length).toBe(10)
    expect(wrapper1.find('.item-blank').length).toBe(1)
  })
})