import Button from 'react-bootstrap/Button'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// connect gives the specified component awareness of the redux store!
// it can take up to 2 arguments!
// 1) "read-mode" (mapStateToProps)
// 2) """write-mode""" (mapDispatchToProps)

const mapStateToProps = (state) => {
  return {
    // every key of this object will become a prop for CartIndicator
    cartLength: state.cart.content.length,
    // CartIndicator really just needs the length of the cart...!
  }
}

const CartIndicator = ({ cartLength }) => {
  const navigate = useNavigate()
  // very similar in functionality to Link

  return (
    <div className="ml-auto mt-2">
      <Button color="primary" onClick={() => navigate('/cart')}>
        <FaShoppingCart />
        <span className="ml-2">{cartLength}</span>
      </Button>
      {/* Link provides navigation like useNavigate but just in JSX */}
      {/* creating a special anchor tag around the elements you want */}
      {/* <Link to="/cart">
        <h1>SARAH</h1>
      </Link> */}
    </div>
  )
}

export default connect(mapStateToProps)(CartIndicator)
