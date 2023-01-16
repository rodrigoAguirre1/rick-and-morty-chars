import Spinner from 'react-bootstrap/Spinner';
import '../styles/Loading.css'

export function Loading() {
  return (
    <>
      <h3 className='loading'>Loading...</h3>
      <div className='d-flex justify-content-center div-spinner'>
        <Spinner animation="border" role="status" className='spinner'>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </>
  );
}