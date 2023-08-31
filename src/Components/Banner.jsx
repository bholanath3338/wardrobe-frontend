export default function Banner(props) {
  return (
    <div className="inner-page-banner">
      <img className="bd-placeholder-img" src={props.image} alt="" />
      <div className="inner-page-banner-text f-flex">{props.children}</div>
    </div>
  );
}
