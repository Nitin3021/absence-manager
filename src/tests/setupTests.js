/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime'
import DotEnv from 'dotenv';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import "jest-enzyme";

DotEnv.config({ path: '.env.test' });

Enzyme.configure({
    adapter: new Adapter()
});