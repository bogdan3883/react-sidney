class NewsletterForm extends React.Component {
  render() {
    // render must -RETURN- JSX
    return (
      <form className="form-newsletter container">
        <label htmlFor="field-newsletter">
          Subscribe to our <span>newsletter</span>
        </label>

        <input
          type="text"
          name="field-newsletter"
          id="field-newsletter"
          placeholder="vrem sa iesim la pauza =))"
        ></input>

        <button title="Subcribe" type="submit">
          Subscribe
        </button>
      </form>
    );
  }
}

const newsletterContainer = document.querySelector('.home-newsletter');
// React recipe?
ReactDOM.render(<NewsletterForm></NewsletterForm>, newsletterContainer);
