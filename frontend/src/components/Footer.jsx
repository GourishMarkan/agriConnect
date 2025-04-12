import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSquareXTwitter, FaSquareInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer className="footer-container">
        <div className="footer-logo flex-1 flex justify-center items-center pr-5">
          <img src="/inverted.png" alt="logo" className="footer-logo-img" />
        </div>
        <div className="footer-support flex-1 pr-5">
          <h4 className="footer-heading">Support</h4>
          <ul className="footer-list">
            <li>#417-d brs nagar Ludhiana, India</li>
            <li>Agriconnect@gmail.com</li>
            <li>+91 1313131313</li>
          </ul>
        </div>
        <div className="footer-links flex-1 pr-5">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li>
              <Link to="/" className="footer-link">Home</Link>
            </li>
            <li>
              <Link to="/jobs" className="footer-link">Crops</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/dashboard" className="footer-link">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="footer-follow flex-1 pr-5">
          <h4 className="footer-heading">Follow Us</h4>
          <ul className="footer-list">
            <li>
              <Link to="/" className="footer-link">
                <FaSquareXTwitter className="footer-icon" />
                Twitter (X)
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                <FaSquareInstagram className="footer-icon" />
                Instagram
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                <FaYoutube className="footer-icon" />
                Youtube
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                <FaLinkedin className="footer-icon" />
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <style jsx>{`
        .footer-container {
          background-color: #111;
          display: flex;
          justify-content: space-between;
          padding: 40px 20px;
          color: #ddd;
          border-top: 2px solid #858585;
        }

        .footer-logo-img {
          width: 150px;
          height: auto;
        }

        .footer-heading {
          color: #fff;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-list li {
          margin-bottom: 10px;
        }

        .footer-link {
          text-decoration: none;
          color: #ddd;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          transition: all 0.3s ease-in-out;
        }

        .footer-link:hover {
          color: #ffb400;
        }

        .footer-icon {
          font-size: 20px;
          color: #ddd;
          transition: all 0.3s ease-in-out;
        }

        .footer-link:hover .footer-icon {
          color: #ffb400;
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .footer-logo, .footer-support, .footer-links, .footer-follow {
            margin-bottom: 20px;
          }

          .footer-logo-img {
            width: 120px;
          }

          .footer-list li {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
