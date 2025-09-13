import { Button, Card } from 'react-bootstrap'
import './App.css'
import FunAsProps from './compontents/FunAsProps'
import Props from './compontents/Props'


function App() {

  return (
    <>
      <Props/>
      <FunAsProps>
        {(count,increment, decrement)=>(
          <>
            <h1 className='text-center'>Props as Function</h1>

            <div className='CountCard'>
               <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Counting</Card.Title>
                <Card.Text>
                  Count:{count}
                </Card.Text>
                <Button className='button1' variant="primary" onClick={increment} >Increment</Button>
                <Button variant='danger' onClick={decrement}>Decrement</Button>
              </Card.Body>
            </Card>
            </div>
          </>
        )}
      </FunAsProps>
    </>
  )
}

export default App
