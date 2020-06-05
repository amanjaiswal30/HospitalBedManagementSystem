import {shallow} from 'enzyme'
import App from '../App'
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter:new Adapter()});
describe("Home App Bar Component",()=>{
    it("renders correctly",()=>{
        const wrapper=shallow(
        <App/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});