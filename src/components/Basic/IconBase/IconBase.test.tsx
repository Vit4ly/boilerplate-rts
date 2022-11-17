import React from 'react'
// import {render} from '@testing-library/react';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from 'react-dom/test-utils'
import pretty from 'pretty'
import IconBase from "@/components/Basic/IconBase/IconBase";

let container

describe('render', () => {
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })
    afterEach(() => {
        unmountComponentAtNode(container)
        container.remove()
        container = null
    })
    it('basic snap', () => {
        act(() => {
            render(<IconBase title={'settings'}/>, container)
        })
        expect(pretty(container.innerHTML)).toMatchSnapshot()
    })
})
