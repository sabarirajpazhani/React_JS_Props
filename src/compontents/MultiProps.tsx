import { Card } from 'react-bootstrap'

type CardsProps={
    id:number,
    name:string,
    role:string,
    children:React.ReactNode
}

const MultiProps = ({id,name,role,children}:CardsProps) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>User ID : {id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
        <Card.Text>
         {role}
        </Card.Text>
         <div>{children}</div>
      </Card.Body>
    </Card>
   
    </div>
  )
}

export default MultiProps
