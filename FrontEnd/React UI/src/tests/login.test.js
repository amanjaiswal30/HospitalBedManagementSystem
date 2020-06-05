import {shallow} from 'enzyme'
import Login from '../component/login'
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import {Provider} from 'react-redux'
Enzyme.configure({adapter:new Adapter()});
const mockStore=configureMockStore();
const store=mockStore({});
describe("Login Form Component",()=>{
    it("renders correctly",()=>{
        const wrapper=shallow(
        <Provider store={store}><Login/></Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});