import profileImg from "../Images/profileImg.png";

function Info() {
  return (
    <div>
      <div className="profile container">
        <img className="profileImg " src={profileImg} alt="" />
        <h1>Laura Smith</h1>
        <p>Frontend Developer</p>
        <small>info@laurasmith.com</small>
        <div className="btn">
          <button className="email">
            <i class="fa-solid fa-envelope"></i>Email
          </button>
          <button className="linkedin">
            <i class="fa-brands fa-linkedin"></i>Linkedin
          </button>
        </div>
      </div>
    </div>
  );
}
export default Info;
