import { styled } from 'styled-components'

export default styled.div`
  color: red;

  .right-title {
    width: ${(props) => (props.flag ? '100px' : '600px')};
    border: 1px solid #333;
  }
  .flag-class {
    background-color: pink;
  }
`
