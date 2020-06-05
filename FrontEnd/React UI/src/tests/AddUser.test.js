import {shallow} from 'enzyme'
import AddUser from '../component/AddUser'
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import {Provider} from 'react-redux'
Enzyme.configure({adapter:new Adapter()});
const mockStore=configureMockStore();
const store=mockStore({});
describe("Home App Bar Component",()=>{
    it("renders correctly",()=>{
        const wrapper=shallow(
        <Provider store={store}><AddUser/></Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});