const Button = (props) => {
  const { buttonText, className } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-button-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="button-container">
        <Button buttonText="like" className="like-button" />
        <Button buttonText="Comment" className="comment-button" />
        <Button buttonText="Share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
