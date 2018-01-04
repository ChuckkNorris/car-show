
// Stateless Component
// @props is an object
// @props.condition is a boolean expression
// @props.children is a reserved React property representing any children within the If component
export const If = ({condition, children}) => {
    if (condition)
      return children;
    else 
      return null;
}
