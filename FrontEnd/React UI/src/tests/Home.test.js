import {shallow} from 'enzyme'
import Home from '../component/Home'
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter:new Adapter()});
describe("Home App Bar Component",()=>{
    it("renders correctly",()=>{
        const wrapper=shallow(
        <Home/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});