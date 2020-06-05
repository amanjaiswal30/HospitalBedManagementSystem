import {shallow} from 'enzyme'
import LoginErrorMessage from '../component/LoginErrorMessage'
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter:new Adapter()});
describe("Login Error Component",()=>{
    it("renders correctly",()=>{
        const wrapper=shallow(
        <LoginErrorMessage/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
