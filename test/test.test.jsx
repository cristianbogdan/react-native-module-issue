import { assert, expect, test } from 'vitest'
import {Hello} from "/src/Hello"
import { render, screen, userEvent } from '@testing-library/react-native';


test("test example'", function(){
  const {getByText}=render(<Hello />)
  expect(getByText("Hello, world!")).toBeTruthy()
})