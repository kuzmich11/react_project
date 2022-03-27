import ForTest from '../ForTest';
import {render} from '@testing-library/react'


describe('', () => {
    it('', () => {
        const component = render (<ForTest />)
            
        expect(component).toMatchSnapshot();
    })
})