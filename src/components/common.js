import { useState, useEffect } from "react";
import rightarrow from "../images/rightarrow.png";
import { Link, useParams } from "react-router-dom";
import HEALTHCAREpic from "../images/extenddedhelth.png";
import TELECOMMUNICATIONpic from "../images/industries/extended/Telecom.png";
// import FINTECHpic from "../images/industries/extended/Fintech.png";
import RETAILMANUFACTURINGpic from "../images/industries/extended/Retail & Manufacturing.png";
// import AGRICULTUREpic from "../images/industries/extended/Agriculture.png";
import GamingEntertainmentpic from "../images/industries/extended/Gamming.png";
import GOVERNMENTpic from "../images/industries/extended/Government.png";
import INSURANCEpic from "../images/industries/extended/Insurance.png";
import BANKINGpic from "../images/industries/extended/Banking.png";
import UTILITIESpic from "../images/industries/extended/Utilities.png";
import staffingpic from "../images/services/extended/staffaug.png";
import SOFTWAREVARpic from "../images/services/extended/Software VAR.png";
import ITConsultancypic from "../images/services/extended/itconsul.png";
// import DataScienceSolutionspic from "../images/services/extended/datasciencedov.png";
// import BusinessAnalyticspic from "../images/services/extended/Business Analytics.png";
import ProjectManagementpic from "../images/services/extended/productmanagement.png";
import s1 from "../images/sponsers/cis.png";
import s2 from "../images/sponsers/google.png";
import s3 from "../images/sponsers/ora.png";
import s4 from "../images/sponsers/ama.png";
import s5 from "../images/sponsers/del.png";
import s6 from "../images/sponsers/intel.png";
import s7 from "../images/sponsers/ibm.png";
import s8 from "../images/sponsers/micro.png";
import s9 from "../images/sponsers/utube.png";
import s10 from "../images/sponsers/hp.png";

export default function CommonIS({ pic, title, des, points, mainlin }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="m-0"
      style={{
        background: isHovered ? "#161616" : "#FFFFFF",
        color: isHovered ? "#FFFFFF" : "#161616",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="row d-flex mx-0 p-2">
        <div className="col col-md-4 d-flex mx-0">
          <img
            src={pic}
            alt="none"
            className="img-fluid py-md-1 h-md-auto w-md-auto"
          />
        </div>
        <div className="col-7 col-md-5  text">
          <div
            className="my-md-3 display-6  col"
            style={
              {
                // color: "#161616",
                // fontSize: "37px",
                // lineHeight: "80px",
                // letterSpacing: "-1.2px",
              }
            }>
            {title}
          </div>
          <div
            className="fs-6"
            style={{
              color: "#9C9C9C",
              // fontSize: "14px",
              lineHeight: "20px",
            }}>
            {des}
          </div>
          <div className="col-md-2 mx-2 d-md-none d-xl-none d-flex align-items-end justify-content-end link">
            <Link
              to={`/${mainlin}/${title.toLowerCase()}`}
              className="btn btn-dark p-2 ">
              View Details <img src={rightarrow} alt="" />
            </Link>
          </div>
          <div
            className="p-md-3 d-none d-md-block d-xl-block"
            style={{
              // color: "#FFF",
              fontSize: "11px",
              fontFamily: "Space Grotesk",
              fontWeight: "600",
              lineHeight: "19.6px",
              letterSpacing: "-0.2px",
            }}>
            Top Benefits
          </div>
          <div
            className="col-md-7 d-none d-md-block d-xl-block"
            id="points"
            style={{ fontSize: "12px" }}>
            {points.map((point) => (
              <div
                className="col m-2 w-75 d-flex"
                style={{
                  borderRadius: "4px",
                  // width: "33px",
                  background: "rgba(0, 0, 0, 0.05)",
                }}>
                <div className="">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame">
                      <path
                        id="Vector"
                        d="M6 0.984375C2.688 0.984375 0 3.67237 0 6.98438C0 10.2964 2.688 12.9844 6 12.9844C9.312 12.9844 12 10.2964 12 6.98438C12 3.67237 9.312 0.984375 6 0.984375ZM4.8 9.98438L1.8 6.98438L2.646 6.13837L4.8 8.28638L9.354 3.73237L10.2 4.58437L4.8 9.98438Z"
                        fill="rgba(15, 70, 245, 1)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="col ">{point}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-2 mx-3 d-md-flex d-none align-items-end justify-content-end link">
          <Link
            to={`/${mainlin}/${title.toLowerCase()}`}
            className="btn btn-dark p-2 m-3">
            View Details <img src={rightarrow} alt="none" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function CommonCard({ pic, title, des }) {
  return (
    <div className="m-1">
      <div className="card border-0" style={{ fontFamily: "Space Grotesk" }}>
        <img src={pic} className="card-img-top img-fluid" alt="Card Image" />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontSize: "20px", fontWeight: "600" }}>
            {title}
          </h5>
          <p
            className="card-text"
            style={{
              color: "#707070",
              fontSize: "16px",
              fontFamily: "Barlow",
              fontStyle: "normal",
              // fontWeight: '400',
              // lineHeight: '-0.3px',
              letterSpacing: "-0.6px",
            }}>
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Common() {
  return (
    <div>
      <div
        className=""
        style={{
          borderRadius: "4px",
          background: "#EFEFEF",
          color: "#161616",
          fontSize: "12px",
          fontFamily: "Space Grotesk",
          lineHeight: "12px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}>
        Blogs & Articles
      </div>
      <div className="">Latest Insights</div>
      <div className="" id="dots image">
        <svg
          width="51"
          height="5"
          viewBox="0 0 51 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.48438 5C4.86509 5 5.98438 3.88071 5.98438 2.5C5.98438 1.11929 4.86509 0 3.48438 0C2.10366 0 0.984375 1.11929 0.984375 2.5C0.984375 3.88071 2.10366 5 3.48438 5Z"
            fill="#373737"
          />
          <path
            d="M13.4844 5C14.8651 5 15.9844 3.88071 15.9844 2.5C15.9844 1.11929 14.8651 0 13.4844 0C12.1037 0 10.9844 1.11929 10.9844 2.5C10.9844 3.88071 12.1037 5 13.4844 5Z"
            fill="#373737"
          />
          <path
            d="M23.4844 5C24.8651 5 25.9844 3.88071 25.9844 2.5C25.9844 1.11929 24.8651 0 23.4844 0C22.1037 0 20.9844 1.11929 20.9844 2.5C20.9844 3.88071 22.1037 5 23.4844 5Z"
            fill="#373737"
          />
          <path
            d="M8.48438 5C9.86509 5 10.9844 3.88071 10.9844 2.5C10.9844 1.11929 9.86509 0 8.48438 0C7.10366 0 5.98438 1.11929 5.98438 2.5C5.98438 3.88071 7.10366 5 8.48438 5Z"
            fill="#373737"
          />
          <path
            d="M18.4844 5C19.8651 5 20.9844 3.88071 20.9844 2.5C20.9844 1.11929 19.8651 0 18.4844 0C17.1037 0 15.9844 1.11929 15.9844 2.5C15.9844 3.88071 17.1037 5 18.4844 5Z"
            fill="#373737"
          />
          <path
            d="M38.4844 5C39.8651 5 40.9844 3.88071 40.9844 2.5C40.9844 1.11929 39.8651 0 38.4844 0C37.1037 0 35.9844 1.11929 35.9844 2.5C35.9844 3.88071 37.1037 5 38.4844 5Z"
            fill="#2FFF50"
          />
          <path
            d="M28.4844 5C29.8651 5 30.9844 3.88071 30.9844 2.5C30.9844 1.11929 29.8651 0 28.4844 0C27.1037 0 25.9844 1.11929 25.9844 2.5C25.9844 3.88071 27.1037 5 28.4844 5Z"
            fill="#2FFF50"
          />
          <path
            d="M48.4844 5C49.8651 5 50.9844 3.88071 50.9844 2.5C50.9844 1.11929 49.8651 0 48.4844 0C47.1037 0 45.9844 1.11929 45.9844 2.5C45.9844 3.88071 47.1037 5 48.4844 5Z"
            fill="#2FFF50"
          />
          <path
            d="M43.4844 5C44.8651 5 45.9844 3.88071 45.9844 2.5C45.9844 1.11929 44.8651 0 43.4844 0C42.1037 0 40.9844 1.11929 40.9844 2.5C40.9844 3.88071 42.1037 5 43.4844 5Z"
            fill="#2FFF50"
          />
          <path
            d="M33.4844 5C34.8651 5 35.9844 3.88071 35.9844 2.5C35.9844 1.11929 34.8651 0 33.4844 0C32.1037 0 30.9844 1.11929 30.9844 2.5C30.9844 3.88071 32.1037 5 33.4844 5Z"
            fill="#2FFF50"
          />
        </svg>
      </div>

      <div className="comment">
        Exceptional staffing solutions that drive business success and help
        professionals achieve their career goals.
      </div>
    </div>
  );
}

export function CommonPageHead({ page, title }) {
  return (
    <div className="container" style={{ padding: "40px", margin: "20px" }}>
      <p
        className="col-2"
        style={{
          borderRadius: "4px",
          background: "#EFEFEF",
          fontSize: "10px",
          fontFamily: "Space Grotesk",
          lineHeight: "12px",
          // letterSpacing: '1px',
          textTransform: "uppercase",
          width: "100px",
        }}>
        {" "}
        TEksett &gt; {page}{" "}
      </p>
      <div
        className="col-md-9 display-4">
        {title}
      </div>
    </div>
  );
}

export function Sponsers() {
  // const sponsers = [
  //   "https://s3-alpha-sig.figma.com/img/cf6f/a85d/e82a601c82e3a8308f145555e6b17235?Expires=1691366400&Signature=bcbC8ZsiG4uPpl4EkdNQcUbo70IYzIj9uyxP39bsI3IGR-v78q8DKwdZt-~fmwUSajTuk3klf0kREuVfntmae~CFtsqf6oZKWxjI3XYkH~DA0Z2L4NCUVBXxejI51310SdZginJroeF93pp00W-LVLP0mk2OqSvI0JRmBgOzyJr1ZPJNhzS5prTu~CGJ1JW~ZC1GuheJgMG2WbmqHTOatzIKHpYvkPZ1qwKkH9n2hamISe0fDxf~avnsbF5AyGibWjIq18CoJU~aJkP3br5vdVOHao~mjQDc-kYPWKHasl3A1kK2WyEChR4DJCGF6RKCNJUkt63VZ6-nkbK0BAKt4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //   "https://s3-alpha-sig.figma.com/img/adc1/2c8e/575610c2a7178b8fb8f717282cea8a44?Expires=1691366400&Signature=IrROEklXDvJp4T093E2dqPwQLVDN2nTKa58fAGIbU5KeS7y7vGKRgGFzDuC5h7ndanEs78bW18UbMW6zoJ-EfLJyiQQOac0niKlNEp6dgZvZyX4v0Bxft38RxSmv5B-xlCmvw33m~CXymoXZEx5T6f3E6nXq5~tHVlg8~2z86qlVLed3COiR6VJUZcPRcC~idVRUztoMQ28Tzz-z6nXw1ec6C1ssUxUwfl-RIhHSK74f4CcOFk4ZurP2B6XkzbjvYHajCcgz~yoqOdzEfk65IWOZiPISIwogm5mMai3AtIjj-LjegqSV9xKb8KEmC8UkhOLcvONs7DLtwpLRipEtZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //   "https://s3-alpha-sig.figma.com/img/720b/3fa2/73ff3e798162e31f8c92c7bc1de25f3d?Expires=1691366400&Signature=jaJpkYwPqK9HABLnoalxXKqhvzSC8sHJdF4B-tP~AxGDpezr9zNV4ZbrWmCEw0H11f0fHuMFTgka5Um54C1PJaBsEX4XUy4axYlgoE3MzjCWYdIGcsSmSPa2tr60IHK3BxICZ2CzAHAf7gA6wu8r~7R0P~P-YYuGQ2QV1yCXxct-Eu6GvTsgRjA7wvrk55BRy-BsncvUHfHt2RGTf6lqcRS6nb3MMQDpWVG8a1lnSNBTIKTbd1mNsZKWcEx6QImFHSRJ4UpTDcZ6pC39dE-rO78x4HnBEZkhnU9FSY0Wi3qDtXZ2lM2p8Kb40ZgHjdQF90pOIzcMD5sZpzWi8sGLpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //   "https://s3-alpha-sig.figma.com/img/3a11/acb3/2d5b93d19aaecd21ea52a1a63b9c6cfe?Expires=1691366400&Signature=hBWZtUsAwJL7jS7Cait2XqmeguG0pp5kv4xj6gkL-t4xN6spFy7Wbu7GpgONuDiCw8g-cotMh0Ip8OT9dA1cFmzmQsTOarbfJTteyN8jbrfUGrnytjDqoH1mYiyQZHWzdpcHMJWRxzUCtUyqKmu1ekoMRdsMe4bvI06t9HwHx44UcjKeZ4v~eQVLKFMHGKtKeH2AK6aKz0MM2f2pieRQaF-gbWiH87~KYO7h5y8ltdDwU4xiUZyw4T2zJe4CMULYTQEYLPCZtYr9lpqI-bYinFP5c1AWd1JWKFxJvb38Mc76IDiTcAcxlapDiX536yPCXxJdkQ4Ox7f-SEg8nRt5~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //   // s4,
  //   "https://s3-alpha-sig.figma.com/img/fdee/fe4b/227fda0ba1f628e56a460d61469387a8?Expires=1691366400&Signature=GDdttwpNT6jtWXikQAKN4vNu6i1IK-lkEf37BXEh2WBaSVxYjv3KUI8zsI~SHKuzZ~l51yRIhaR1iPnr8VlQxtRHvbAtcErm6cmoQyeRO6aSgisljRh22kCkhLIJPtAoNrRNVzkuTLi79bwhwWzIUiurGQFpelUUMU3FEqc~Tp2xxtUKAr0q5556XGACkx6Th~fjI9KF4Ysa8Ev32KvyYM3onkPT1ANc-20zSdYQ9zR~WzLHIA8LUbnulef2BIB7-SSEUuFlOuk2DTPgw7T3Qgl2k0LaIYffK7yshGuzmEmsJDixKVjLsSf1tgy~Z6xWsKNP2yH7h7X1PElfOPojRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //   "https://s3-alpha-sig.figma.com/img/8f66/0565/3711481788dcde4111bb6b7d47ccb226?Expires=1691366400&Signature=DddR9EPAaQgx2mwrl6kADziNAHIpcRgB~o5aVB~0Ds~zOqbI7EKcfWTGn02fV94bIPHz2~2OBl-KmZlKj7S-HFKCe1~UKADsbwkf8j5pj9CqJwf5w6~BmnB6Fe0lLoAy~rAU9vV8tL4foswLVobDybXA6C7vxvHR0gwCyc-PGjzft79sToC1SFvqnfRRj7wUfb7V4cnCJ3Ikp4Ld8ygUelAhuAtOUoRMOyNGmS0ja2cu0uXR3VE15aOdughbeOznlobTCn5PDA6a4KDLpTsP6tK97m4WXB~z-XY5GyUsoqzbcXmjRxSRiOsW7t~AkM28XYlT35F9z~ftEP1UE8Fe7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //   "https://s3-alpha-sig.figma.com/img/231b/799c/e7e9fbe2e5ca4ece7e482f88d29cdae8?Expires=1691366400&Signature=KwTcZkm5MwJHBRdtzUAhWudapwqlp6KH2rWds5w-3ur4uQ~Vi-v4iayhfMX7EnQodiHfcathKLoT~-atqcPFyfcQ-3l72hpLGeLpouEL3AvSy8vs6vHSDu2p3sVsL4bKNMoFLD3Bf35QCYCqUPjwiuVkZVsIQtX7mgQIkHlHOgE~ow2ZteZql12cFfKpY5r8RcXGy5WYOGduYYFoWz6aTcc95jT7MugdxVq~iPL64bK0YwnbpCh86bvZegZaEG2q7gOsPu4P~X40gJZIbJnSqcu9xQqraTb5uU3HDgFVsDFTLzSgi6HNTS2Qqlam3Yg-eWCRN8oAoh6C4GIm4g15Ng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //   "https://s3-alpha-sig.figma.com/img/e74a/cfbe/719e3966783d202088e716811f28b717?Expires=1691366400&Signature=g-2fSGUt1gCIyh3d0w9eEV-vqfhX6ZBKTKcfJauTHwJg37~P0M8hgTNLnq7zn-uWbUL36D9DkzbjB-ijrOgbfLkyVzk5pHMePWkCte8bDb15YrcNFnpxVw66wKIh1iM938P82l57JTmuDy0m478DvvfBoG9SYHdF6N0F7R3jjG8~rRIprDy8QIfiBoWIvpMphlS8pSUDL2okkFcw33q~WcGBzvF61q0vU8SXEu9KZ5~jSeAN6XnGW3OcfI9vNfBYdIMKWPiJPet4eGXoIeyKpopddZi0gTObNfC8cDC9YaSF4dryKFIu~-GmJo3cAyD-2pmF1ruPUTUfgfo7YqxVyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //   "https://s3-alpha-sig.figma.com/img/cca6/b7bc/767cc6a6dd43df0b407b26b97e54ffcc?Expires=1691366400&Signature=HzxYlCElcYRSqGomuLi0n~h6uz7JdsxJUKiJUryHXi7QFfvKeyoPLpSmLh4RKXuk~3Ruvqf~Kv5O5C5tBHbKLDbgDsz9rpzb2Zi2ZN~1-He6vuUyqu-Pd84yt4ycO-UnXMNfWxhcOXWxOSscq8sjGQWLne2vPyiLv0NM4j05XB8~LAkbVkd4KvIwb0TLwiEe3aMBLmiSUIeNlBYXVFQJa4EFJd4yhTKuPhEQhnsVw~2gBLiJs5XDuLkVtP0oFYpDc0157ELcbayzD163falaRtXoh5ekdcN38~JS8L2CgfnE3S4tScz-izRtAu2647GEBtdUdhLepoMQphg8CpteAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //   "https://s3-alpha-sig.figma.com/img/df1c/43e4/26d287669c6f0dbfb6d55c5a39c766d8?Expires=1691366400&Signature=H-gY1VTpRDo1055lf4qtMSVIScPcGJ1QEzrpOyGvM5dqHIZNRPLtJubL5KrE04TmsO-1HhTeqxbT2B0X9v3WE1xdyMWLJ9543kaOWimBslpF5xu-WE4TTnP8GjeuxVpfN5RROsBeJreakfLFQcvDgF-z3dsgqs9iQuaSo0PJfnGorhRo8QGfffgf9FxxCqxIj47AVeTom26m65N5AlCXD36Mn6HjJ8FxpK4AtDpqZckoU6cgNsTpvkVKnwwN70fpjaF~Ct6Llg1MXKi-Srag9E~LguVSLfBQz5ifCdy8Uv6G-0vtIkLiUb5iHucIpDSdbYS96oRe8C~Zb8YWp~W4ew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  // ];

  const sponsers = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];
  const [displayedSponsors, setDisplayedSponsors] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Display fewer sponsors on mobile
        setDisplayedSponsors(sponsers.slice(0, 3));
      } else {
        // Display all sponsors on larger screens
        setDisplayedSponsors(sponsers);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className={`d-flex img`}>
        {displayedSponsors.map((pic, index) => (
          <div
            key={index}
            className={`col img `}
            style={
              {
                // width: "20px",
                // height: "10px",
                // maxHeight: "0px",
              }
            }>
            <img
              className="img-fluid"
              style={{
                maxWidth: "105px", // Set the maximum width of the image
                maxHeight: "40px",
                // width: "105px",
                // height: "40px",
                // objectFit: "cover",
              }}
              alt=""
              src={pic}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CommonPlusOpen({ question, Answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      div
      className="row"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      <div className="col-1 m-md-3" style={{ width: "40px", height: "10px" }}>
        <svg
          width="48"
          height="38"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_61_433)">
            <path
              d="M38 26H26V38H22V26H10V22H22V10H26V22H38V26Z"
              fill="#161616"
            />
          </g>
          <defs>
            <clipPath id="clip0_61_433">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        className="col mx-3 m-md-3"
        style={{ fontSize: "18px", fontWeight: "500" }}>
        {question}
      </div>
      {open ? (
        <div className="" style={{ marginTop: "0px", marginLeft: "90px" }}>
          {Answer}
        </div>
      ) : (
        " "
      )}
      <hr />
    </div>
  );
}

export function ButtonSelecter() {
  // combination of industies and services extended pages
  const { takePrams } = useParams();

  const expanded = [
    {
      ExpandedModel: "TELECOMMUNICATION",
      pic: TELECOMMUNICATIONpic,

      Herotext: "Powering Telecommunications with Next - Gen IT Solutions",

      Subtext:
        "In a world where communication is key, your business needs IT solutions that can keep up with the speed of technology.Our team of experts at Teksett has a deep understanding of the latest trends and technologies, and we are committed to helping your business succeed.",

      topBenefits: [
        "Network Infrastructure Management",
        "Telecom- Specific IT Consultancy",
        "Software Development for Telecommunications",
      ],
      Headline:
        "Teksett - Your Partner for Comprehensive IT Solutions in Telecommunications",
      HeadlineText:
        "At Teksett, we understand the importance of robust and reliable network infrastructure for telecommunications businesses.That's why we offer expert network infrastructure management services, from designing new infrastructure to upgrading existing ones, to improve your network performance and overall efficiency.",

      FAQs: [
        {
          question:
            "What kind of network infrastructure services do you offer?",
          Answer:
            "We offer a range of network infrastructure management services, including upgrading and designing new infrastructure, to help improve network performance and increase overall efficiency.",
        },
        {
          question:
            "Can you develop custom software solutions for our telecommunications business?",
          Answer:
            "Yes, we specialize in developing custom software solutions that are specifically tailored to meet the unique needs of the telecommunications industry.Our team of experienced developers can build cutting - edge software solutions that can help your business stay ahead of the competition.",
        },
        {
          question:
            "How can your IT consultancy services help my telecommunications business ?",
          Answer:
            "Our team of expert IT consultants offers specialized consultancy services to help streamline your IT processes and optimize your workflows.We work closely with you to identify your unique needs and develop customized solutions that help you achieve your goals.",
        },
        {
          question:
            "Do you provide ongoing support and maintenance for your IT solutions ?",
          Answer:
            " Yes, we offer ongoing support and maintenance services to ensure your IT solutions continue to operate smoothly and effectively.We also provide regular updates and upgrades to keep your systems up - to - date with the latest technologies and advancements in the industry.",
        },
      ],
    },
    {
      ExpandedModel: "FINTECH",
      // pic: FINTECHpic,
      pic: "https://s3-alpha-sig.figma.com/img/8fe9/dd35/100ba0812d9efe89ab6af616ab17420e?Expires=1691366400&Signature=Y2XIiXKgXgkl32Bsej5Q2nue6CxhD9iSrcfcxUVQb08ntFK6ti-hnjC-mrV-geYOH63ewFFUVbPFYkf5ZN86R6-D4F-JOJ~1K-ShttRPOyBfyjGhrmA-g-AbxD89BgdISjj4nHc-crz1OnecfF4UnA-LU3dHPCVYunRMiQqzxi8JfsuSlcWMabyyF0lqTHCyu6FIp480Fx9DeNSOKXJxqlpSxqOx5Ajf5iwttBCShcE1mIXlMMLc-DTpHYtWvHHST~g6fgsxWKfb90-x-6mGj2kts2H0od6jhGTvhjcF0pEJboeOoyOSqMzgECpBdLOy9eNIEFOVxCz5bEsPofoPYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      Herotext: "Transform Your Fintech Operations with Our IT Solutions",
      Subtext:
        "With our expertise in IT solutions, we can help you streamline your fintech operations and drive your business growth forward",
      topBenefits: [
        "Secured transactions with robust cybersecurity",
        "Finance process automation",
        "System integration",
      ],
      Headline: "Transform Your Fintech Operations with Teksett",
      HeadlineText:
        "Protect your transactions with top-notch cybersecurity, automate financial processes for greater efficiency, and integrate your systems seamlessly with Teksett's expert IT solutions. Our robust cybersecurity solutions, automation tools, and system integration expertise can help your business stay ahead of the competition and achieve your goals.",

      FAQs: [
        {
          question:
            "Can your IT solutions handle complex financial calculations?",
          Answer:
            "Yes, our automation tools are designed to handle everything from data entry to complex financial calculations, ensuring accuracy and efficiency in your financial operations.",
        },
        {
          question:
            "How can automation improve the efficiency of my financial operations?",
          Answer:
            "By automating your financial processes, you can eliminate manual errors and streamline workflows, freeing up your staff to focus on more important tasks, ultimately improving productivity and reducing costs.",
        },
        {
          question:
            "How can your advanced threat detection systems help protect my business from cyber threats?",
          Answer:
            "Our advanced threat detection systems are designed to detect and respond to  cyber threats in real-time, helping to protect your business from potential breaches. By leveraging these systems, you can proactively identify and address security issues and minimize the risk of data breaches.",
        },
        {
          question:
            "Can you help integrate our existing systems and applications to create a unified platform ?",
          Answer:
            "Yes, our team can help you integrate your existing systems and applications, including legacy systems, to create a unified platform that streamlines operations and improves decision-making",
        },
      ],
    },
    {
      ExpandedModel: "HEALTHCARE",
      pic: HEALTHCAREpic,
      Herotext: "Streamlined IT Solutions for Your Healthcare Practice",

      Subtext:
        "With our expert IT services, your healthcare practice can focus on what matters most: providing exceptional patient care. Our expertise in the industry and range of IT services make us the perfect partner to take your healthcare business to the next level.",

      topBenefits: [
        "Streamline Patient Management",
        "Data Security and Compliance",
        "Healthcare operations optimization",
      ],
      Headline: "Why Trust Teksett for your healthcare IT needs?",
      SubText:
        "Our IT solutions provide custom software development for patient management, data security and compliance, and IT staff augmentation to optimize healthcare operations. Our tailored solutions can help reduce errors, increase efficiency, improve patient outcomes, and ensure compliance with regulatory organization",

      FAQs: [
        {
          question:
            "What specific patient management processes can your IT solutions streamline?",
          Answer:
            "Our IT solutions can streamline patient registration, appointment scheduling, medical records management, billing and claims processing, and communication with patients and healthcare providers.",
        },
        {
          question:
            "How can your IT solutions ensure data security and compliance in the healthcare industry?",
          Answer:
            "Our IT solutions comply with regulatory organizations and use advanced security measures such as encryption, access controls, and data backup to protect sensitive information.",
        },
        {
          question:
            "Can you provide IT staff augmentation services to our healthcare organization?",
          Answer:
            "Yes, we offer IT staff augmentation services that can provide your healthcare organization with top - notch IT talent to support your IT infrastructure, develop software solutions, and provide IT training to staff.",
        },
      ],
    },
    {
      ExpandedModel: "RETAIL AND MANUFACTURING",
      pic: RETAILMANUFACTURINGpic,
      Herotext:
        "Your Retail and Manufacturing Business Deserves Innovative IT Solutions.",
      SubText:
        "Streamline your operations and improve your bottom line with Teksett's tailored IT services for the retail and manufacturing industry. Our tailored approach ensures that we understand your unique needs and deliver the solutions that meet them.",
      topBenefits: [
        "Optimized Supply Chain Management",
        "Enhanced Customer Experience",
        "Robust Data Analytics",
      ],
      Headline:
        "Streamline your retail and manufacturing operations with Teksett",
      HeadlineText:
        "Our software solutions offer optimized supply chain management, enhanced customer experience, and robust data analytics tools.Our supply chain management solutions are customizable, offer end- to - end supply chain visibility, and seamlessly integrate with your existing systems.",

      FAQs: [
        {
          question:
            "Can your solutions be customized to fit my business needs?",
          Answer:
            "Yes, we understand that every business is unique, and our supply chain management solutions can be tailored to meet your specific requirements.",
        },
        {
          question: "How do your solutions ensure supply chain visibility?",
          Answer:
            "Our solutions offer end-to-end supply chain visibility, allowing you to track your inventory in real-time, monitor order fulfillment, and optimize shipping and delivery.",
        },
        {
          question: "Can your solutions integrate with my existing ERP system?",
          Answer:
            " Yes, our supply chain management solutions are designed to seamlessly integrate with your existing ERP system, enabling you to manage your entire supply chain from a single platform.",
        },
        {
          question:
            "What kind of data insights can I get from your analytics tools ?",
          Answer:
            "Our analytics tools provide real-time insights into your inventory levels, order fulfillment, sales trends, and customer behavior, enabling you to make informed business decisions.",
        },
      ],
    },
    {
      ExpandedModel: "AGRICULTURE",
      // pic: AGRICULTUREpic,
      pic: "https://s3-alpha-sig.figma.com/img/3129/240a/566ba2e175467c74f60927e7bcd70817?Expires=1691366400&Signature=glDeElSGe1Wol-QHXVIY1MggrqlyWb8BkHFYTVNe05JIE3E0rn0BxxImYgQ-mkfBvhsx6gD7IZidPtX77u7HM4JQ7szATWOz31C9HhW5hZaHUbFqDAE0OXb21hmnYJKSYXpBcOjjX~bLZzk1bQmioQHfN~WLNP6INrwKgfVE0VXEQL1RPZyRTmZoBb6BsLET-xQiPs4JRvlIO-S~W~mWyyFpwPmOedGof7g0WS4wQeUwFfAp-mD4q9oMn7bAL3efR~SivEmS9oFceXlyFJnMI-zP~a5yPqeFYRM2NK1zslRe3slua6h6mjfQEBzKK7IJVBlpzEEC2bcPzE6MrBV-WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      Herotext: "Empowering the Future of Agriculture with Modern IT Solutions",

      Subtext:
        "Teksett provides tailored IT solutions for the agriculture industry to enhance efficiency, productivity, and profitability.",

      topBenefits: [],
      Headline: "Transform Your Agribusiness with Our Smart IT Solutions.",
      HeadlineText:
        "Our IT solutions for agriculture operations include IoT sensors, data analytics, and AI-powered tools, enabling precision farming and efficient agribusiness management. Our customized services help improve crop yield, reduce costs, and enhance overall productivity.",

      FAQs: [
        {
          question:
            "What type of IT solutions do you offer for agriculture operations?",
          Answer:
            "We offer a range of smart solutions, including IoT sensors, data analytics, and AI-powered tools that can help improve crop yield, reduce costs, and enhance overall productivity.",
        },
        {
          question: "How can your IT solutions help me with precision farming?",
          Answer:
            "Our technology enables you to monitor soil moisture, temperature, and other essential parameters in real-time, allowing you to make informed decisions based on accurate data.",
        },
        {
          question:
            "Can your IT solutions help me manage my agribusiness operations?",
          Answer:
            "Yes, our solutions can help you manage your agribusiness operations efficiently. We offer supply chain management and inventory control services to help you streamline your processes, improve decision-making, and reduce operational costs.",
        },
        {
          question:
            "Will your IT solutions be customized to my specific needs?",
          Answer:
            "Yes, our solutions are tailored to meet the specific needs of each client.We work closely with you to understand your requirements and develop a customized plan that aligns with your goals.",
        },
      ],
    },
    {
      ExpandedModel: "Gaming & Entertainment",
      pic: GamingEntertainmentpic,
      Herotext:
        "Powering Gaming and Entertainment with Innovative IT Solutions",
      Subtext:
        "From customized software development to cloud solutions and cybersecurity, we have the expertise and experience to help you navigate the constantly evolving landscape of the gaming industry",

      topBenefits: [
        "Gaming-Specific IT Solutions",
        "Creation of Immersive Experiences for customers",
        "Entertainment Industry IT Solutions",
      ],
      Headline:
        "Experts in Gaming-Specific and Entertainment Industry IT Solutions",
      HeadlineText:
        " We offer customized solutions for gaming businesses and the entertainment industry. We will work with you in the areas of game development, server management, network infrastructure, video production, post-production, live event streaming, ticketing solutions, and emerging technologies such as augmented reality, virtual reality, and artificial intelligence.",

      FAQs: [
        {
          question:
            "What kind of IT solutions can you provide for my gaming business?",
          Answer:
            "We can provide customized solutions for game development, server management, network infrastructure, and other needs specific to the gaming industry.",
        },
        {
          question:
            "Can you help me with video production and live event streaming for my entertainment business?",
          Answer:
            "Yes, we have expertise in these areas and can provide tailored solutions to meet your needs.",
        },
        {
          question:
            "How can you help me create immersive experiences for my customers?",
          Answer:
            "We can leverage emerging technologies such as augmented reality, virtual reality, and artificial intelligence to create truly immersive experiences for your customers.",
        },
        {
          question:
            "Do you offer IT solutions for businesses outside of gaming and entertainment ?",
          Answer:
            "Yes, we can provide customized IT solutions for businesses in a variety of industries.",
        },
      ],
    },
    {
      ExpandedModel: "GOVERNMENT",
      pic: GOVERNMENTpic,

      Herotext: "Empowering the Government with Robust IT Solutions",

      Subtext:
        "We provide reliable and secure IT services that help government agencies streamline their operations and improve their service delivery.",

      topBenefits: [
        "Deep understanding of government operations and regulations",
        "Robust and secure IT infrastructure",
        "Expertise in implementing",
      ],
      Headline: " IT Solutions Tailored For Your Needs",
      HeadlineText:
        "With our expertise in IT, we are committed to delivering solutions that help government organizations streamline operations, improve efficiency, and enhance security. Trusted IT Services for Government Agencies. We understand that the government sector requires specialized IT solutions that are tailored to meet their unique needs. That's why we offer a range of services that are specifically designed to meet the demands of government organizations.",

      FAQs: [
        {
          question:
            "What types of IT services do you provide to the government sector?",
          Answer:
            "We provide a range of IT services including software development, cybersecurity, cloud computing, business analytics, and IT consulting.",
        },
        {
          question:
            "How do you ensure the security of the solutions you provide to government agencies?",
          Answer:
            "We follow industry best practices and comply with government regulations to ensure the security of our solutions. We conduct regular security audits and provide training to our staff to ensure that they are up-to-date with the latest security protocols.",
        },
        {
          question:
            "How do you ensure that your solutions meet the unique needs of government agencies?",
          Answer:
            " We work closely with our clients to understand their specific needs and requirements. We then develop tailored solutions that meet their needs and exceed their expectations.",
        },
        {
          question:
            "How can I get started with your IT services for the government sector?",
          Answer:
            "To get started, simply contact us via phone or email and one of our representatives will be happy to assist you.We will work with you to understand your specific needs and provide you with a customized solution that meets your requirements.",
        },
      ],
    },
    {
      ExpandedModel: "INSURANCE",
      pic: INSURANCEpic,
      Herotext: " Secure Your Insurance Business with Our Advanced IT Services",

      Subtext:
        " Experience Reliable IT Support Tailored to Your Insurance Business Needs.",

      topBenefits: [
        "Customized solutions to meet your unique business needs",
        "Streamlined workflows for increased efficiency",
        "Expertise in insurance-specific software and systems",
      ],
      Headline: "Choose Teksett for Your Insurance IT Needs",
      HeadlineText:
        "We understand the complex regulations and requirements that the industry demands, and we have the expertise to help you navigate these challenges. We take a personalized approach to every project, ensuring that your business needs are met with the highest level of service and support.",

      FAQs: [
        {
          question: "What is your experience working with insurance companies?",
          Answer:
            "Our team has extensive experience working with insurance companies of all sizes, from small independent agencies to large multinational corporations.",
        },
        {
          question:
            "Can you help us with software and systems specific to the insurance industry?",
          Answer:
            "Absolutely. Our team has expertise in a wide range of insurance-specific software and systems, and we can help you identify and implement the solutions that will work best for your business.",
        },
        {
          question: "How quickly can you respond to IT issues or emergencies?",
          Answer:
            "We offer 24/7 support and monitoring, and our team is always on call to respond to any IT issues or emergencies as quickly as possible.",
        },
        {
          question:
            "How do you customize your solutions to meet our specific business needs?",
          Answer:
            "We take a personalized approach to every project, working closely with our clients to understand their unique business needs and designing customized solutions to meet those needs.",
        },
      ],
    },
    {
      ExpandedModel: "BANKING",
      pic: BANKINGpic,

      Herotext: "Innovation and Security for the Banking Industry",

      Subtext:
        "Our IT services are designed to help banks enhance their operational efficiency, streamline processes, and reduce costs while maintaining the highest levels of security.",

      topBenefits: [
        "Reliable and scalable banking solutions",
        "Ongoing support and maintenance",
        "",
      ],
      Headline: "Reliable IT solutions for the Banking Industry",
      HeadlineText:
        "We offer customized IT solutions that are tailored to the specific needs of each bank, including core banking applications, transaction processing, data analytics, and digital banking platforms, ensuring that they get the most out of their technology investments. We do all these while also complying with industry regulations and standards. ",

      FAQs: [
        {
          question: "What types of IT services do you offer for banks?",
          Answer:
            "We offer a wide range of IT services for banks, including network infrastructure management, data security, cloud computing, software development, and IT consulting, among others.",
        },
        {
          question: "How do you ensure the security of our data?",
          Answer:
            "We uExpert-led team and professionalstilize advanced security technologies and protocols, including firewalls, intrusion detection and prevention systems, encryption, and multi- factor authentication, to protect your data from unauthorized access, theft or loss.",
        },
        {
          question:
            "How do you ensure the reliability and availability of our IT infrastructure? ",
          Answer:
            "We utilize proactive monitoring and management tools to detect and resolve potential issues before they impact your business operations. We also offer backup and disaster recovery solutions to ensure that your data is always available, even in the event of a system failure or natural disaster.",
        },
        {
          question: "What is your approach to IT consulting for banks?",
          Answer:
            "Our approach to IT consulting involves working closely with you to understand your business objectives, IT infrastructure, and technology requirements, and then developing a customized roadmap that aligns with your goals and budget. ",
        },
      ],
    },
    {
      ExpandedModel: "UTILITIES",
      pic: UTILITIESpic,

      Herotext: "Powering Utilities Forward with Expert IT Solutions.",

      Subtext:
        "Teksett excels in delivering tailored IT services and solutions for the utilities industry. With industry-specific expertise, robust infrastructure, and adherence to regulatory standards, we ensure optimal performance and reliability for utility operations",

      topBenefits: [
        "Comprehensive Utilities Expertise",
        "Regulatory Compliance and Data Integrity",
        "Robust Infrastructure for Mission-Critical Systems",
      ],
      Headline: "Modern IT solutions for the Utilities  Industry",
      HeadlineText:
        "Teksett specializes in customized IT services for utilities, delivering optimal performance, reliability, and efficiency in water, natural gas, and electricity operations. With our extensive expertise, robust infrastructure, and regulatory compliance, we provide tailored solutions you can trust in the utilities industry.",

      FAQs: [
        {
          question:
            "How does Teksett's IT services enhance utility operations in the water, electricity,natural",
          Answer:
            "Teksett offers tailored IT solutions for utilities, optimizing water distribution, grid monitoring, pipeline management, and safety protocols. Our services improve efficiency, reliability, and customer service across all utility sectors. ",
        },
        {
          question:
            "What technological advancements does Teksett bring to utility companies?",
          Answer:
            "Teksett leverages advanced technologies like IoT sensors, data analytics, and smart metering to provide real-time insights, optimize resource allocation, detect leaks, and enhance overall utility operations efficiency.",
        },
        {
          question:
            " How does Teksett assist utility companies in managing their infrastructure effectively?",
          Answer:
            "Teksett provides comprehensive IT systems that enable utility companies to monitor and optimize infrastructure, including water distribution networks, electricity grids, and natural gas pipelines, improving operational efficiency and minimizing risks.",
        },
        {
          question:
            "How does Teksett ensure reliable and uninterrupted utility services for customers?",
          Answer:
            "By leveraging robust infrastructure and expertise in IT solutions, Teksett helps utility companies proactively monitor and manage their systems, ensuring uninterrupted service delivery of water, electricity, and natural gas to customers.",
        },
      ],
    },

    // SERVICES EXPANDED

    {
      ExpandedModel: "IT Solutions Delivery",
      pic: ITConsultancypic,

      Herotext: "Efficient IT Solutions Delivered for You",

      Subtext:
        "At Teksett, we understand that your business relies on efficient and effective IT solutions. That's why we offer a comprehensive range of services to help you streamline your operations, reduce costs, and maximize productivity. ",

      topBenefits: [
        "High level of expertise",
        "Customized IT Solutions ",
        "Collaborative approach to work",
      ],
      Headline: "We can deliver the perfect IT solution to you ",
      HeadlineText:
        "We offer customized IT solutions that are tailored to meet the specific needs of your business.We also strive to take a collaborative approach, working closely with clients every step of the way to ensure the best possible results.",

      FAQs: [
        {
          question: "What types of customized IT solutions do you offer?",
          Answer:
            "Teksett offers a wide range of customized IT solutions, including cloud migration (AWS, GCP, Azure, OpenStack), application development (Micro Services & SOA, DevOps, Agile), UI/UX (User Interface, User Experience, UX A/B Testing), mobile application development (Native, Cross-Platform, Selenium), project management, and product development.",
        },
        {
          question:
            "How do you ensure that your IT solutions will work for my business?",
          Answer:
            "Teksett takes a collaborative approach, working closely with you to understand your needs, goals, and challenges. We also have a proven track record of delivering IT solutions that work and stay up to date with the latest industry trends and technologies.",
        },
        {
          question:
            "Can you help my business scale its IT infrastructure as it grows?",
          Answer:
            "Yes, Teksett provides scalable IT solutions that can grow with your business needs. Whether you need to add new users, upgrade your systems, or integrate new technology, their team has the expertise and experience to help you scale your IT infrastructure.",
        },
        {
          question: "Do you offer ongoing IT support and maintenance services?",
          Answer:
            "Yes, we offer ongoing IT support and maintenance services to ensure that your IT systems are running smoothly and efficiently. We can also provide proactive monitoring and troubleshooting to prevent issues before they occur.",
        },
      ],
    },
    {
      ExpandedModel: "STAFF AUGMENTATION services",
      pic: staffingpic,

      Herotext: "Build a World-class team with our Top IT experts",

      Subtext:
        "Our IT staffing services offer a range of solutions to help you find the right talent for your business needs. From web developers to IT recruiters, our team of experts can help you find the perfect candidate to fill your IT staffing requirements.",

      topBenefits: [
        "Cost-effective",
        "Reduce hiring time",
        "Access to top 5% talents",
      ],
      Headline: "Why Choose Teksett for your IT Staffing needs?",
      HeadlineText:
        "Our IT staffing services offer a cost-effective solution for small and medium-sized businesses to access top talent without the financial burden of hiring full-time employees. Our services provide flexibility, access to top talent, and reduced hiring time.",

      FAQs: [
        {
          question: "How does Teksett's IT staffing service work?",
          Answer:
            "Teksett's IT staffing service works by providing businesses with access to a pool of top IT talent. We pre-screen and qualify candidates to ensure that they meet your requirements, and we provide flexibility in hiring for specific projects or periods of time.",
        },
        {
          question:
            "What are the cost savings associated with using Teksett's IT staffing services?",
          Answer:
            "Hiring full-time IT professionals can be expensive, especially for small and medium-sized businesses. You'll only pay for the time and expertise that you need, without the added costs of benefits, taxes, and other expenses associated with hiring full-time employees.",
        },
        {
          question:
            "How long does it typically take to hire an IT professional through Teksett's IT staffing service?",
          Answer:
            "We can help your business reduce hiring time by providing a range of pre-screened and qualified candidates. The time it takes to hire an IT professional will depend on the specific requirements of your project and the availability of qualified candidates. Our team of experts will work with you to find the right candidate as quickly as possible based on our offshore and on-site models.",
        },
      ],
    },
    {
      ExpandedModel: "SOFTWARE VAR",
      pic: SOFTWAREVARpic,

      Herotext: "Trusted Microsoft, SAP, SAAS and Oracle Software VAR",

      Subtext:
        "As a value-added reseller (VAR) for Microsoft, Oracle, SAP and SAAS we provide comprehensive software solutions that enable businesses to increase efficiency, productivity, and profitability.",

      topBenefits: [
        "Comprehensive software solutions",
        "Streamlined processes",
        "Expert support",
      ],
      Headline: "Why Choose Teknett for your softwares?",
      HeadlineText:
        "As a trusted VAR (Value-Added Reseller), we specialize in providing comprehensive software solutions from industry leaders like Microsoft and Oracle. Our expert team collaborates with you to identify and seamlessly implement the most suitable solutions, including SAP and SAAS. We also offer ongoing support to ensure your software is up-to-date, secure, and running smoothly.",

      FAQs: [
        {
          question: "How does Teksett's IT staffing service work?",
          Answer:
            "Teksett's IT staffing service works by providing businesses with access to a pool of top IT talent. We pre-screen and qualify candidates to ensure that they meet your requirements, and we provide flexibility in hiring for specific projects or periods of time.",
        },
        {
          question:
            "What are the cost savings associated with using Teksett's IT staffing services?",
          Answer:
            "Hiring full-time IT professionals can be expensive, especially for small and medium-sized businesses. You'll only pay for the time and expertise that you need, without the added costs of benefits, taxes, and other expenses associated with hiring full-time employees.",
        },
        {
          question:
            "How long does it typically take to hire an IT professional through Teksett's IT staffing service?",
          Answer:
            "We can help your business reduce hiring time by providing a range of pre-screened and qualified candidates. The time it takes to hire an IT professional will depend on the specific requirements of your project and the availability of qualified candidates. Our team of experts will work with you to find the right candidate as quickly as possible based on our offshore and on-site models.",
        },
      ],
    },
    {
      ExpandedModel: "IT Consultancy",
      pic: ITConsultancypic,

      Herotext: "Expert IT Consultancy Services to Transform Your Business",

      Subtext:
        "At Teksett, we take pride in our years of experience in the industry.Our team of experts is well - equipped to provide you with tailored solutions that meet your unique IT needs.",
      topBenefits: ["Cost-savings", "Competitive Edge", "Enhanced Security"],
      Headline: "Get Reliable IT Solutions Tailored for You",
      HeadlineText:
        "Our IT consultancy services aim to provide you with improved efficiency and productivity through streamlined business operations.We also prioritize enhanced security and compliance to ensure their systems and processes meet the latest security standards and regulations.",

      FAQs: [
        {
          question: "What types of IT consultancy services do you offer?",
          Answer:
            "We offer a range of IT consultancy services, including IT strategy consulting, cybersecurity consulting, cloud consulting, User experience consulting, data managed services and more. Our services are tailored to meet your unique business needs.",
        },
        {
          question:
            "How can IT consultancy services improve my business operations?",
          Answer:
            "We take security very seriously and ensure that your systems and processes are compliant with the latest security standards and regulations. We also conduct regular security assessments and provide ongoing monitoring to detect and prevent potential threats.",
        },
        {
          question:
            "What kind of cost savings can I expect from your IT consultancy services?",
          Answer:
            "Our IT consultancy services acan help you identify cost-saving opportunities and optimize your IT spend. We'll work with you to develop a customized plan that aligns with your budget and goals, ensuring that you get the most value for your investment.",
        },
      ],
    },
    {
      ExpandedModel: "Data Science Solutions",
      // pic: DataScienceSolutionspic,
      pic: "https://s3-alpha-sig.figma.com/img/37d0/31de/d752a9542511e5aae864b9797046e1cb?Expires=1691366400&Signature=hDoTPrcRUGjPVAvvO0eI1CKnYDCuX73Oeew7QNx4ThPQ8vbYFq00gjg-6H43YB7HwhUXxgS2n58YAen0b3JOADGDliDul0SSqLBEMhujwpGDzfai2VUv9ElSlN9WsijWe7uJRPIpvCsi3QQomjNIJLC2jMTNAu6radQSfjEvCklEjTodbFU1XVfhJqP8iRD4xJ2sQVZpQ0~gSFEPhp3rI6W8PIXK72jqjU~4ZtDBwXFZqXQue8cak975lJgX0XYZA72oqLKI6i9gpF0KA6r0GtYNgAE4o3-dlVP~SSATR8t0Jvs3B0hi9lbQIpdRc4ElpGIw~mk5IAgHdbuL-aLqwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

      Herotext: "Smart Data. Smarter Decisions",

      Subtext:
        "Harness the power of your data with Teksett's expertise in machine learning algorithms and advanced statistical tools. Our tailored solutions drive actionable insights and empower you to make informed decisions for exponential growth.",
      topBenefits: [
        "Precise predictive modeling capabilities",
        "Robust data analysis techniques",
        "Reliable and accurate results",
      ],
      Headline: "Why Choose Teksett for your Data Science Solutions?",
      HeadlineText:
        "With Teksett, you can benefit from our unparalleled expertise in implementing a diverse range of machine learning algorithms, such as Decision Trees, Regression, Black Box, 5-way split, and Random Forest. Our team of data scientists possesses the knowledge and experience to extract valuable insights from your data, empowering you to make informed decisions that drive business growth.",

      FAQs: [
        {
          question:
            "What machine learning algorithms are utilized in your data science solutions?",
          Answer:
            "Our data science solutions employ a variety of machine learning algorithms, including Decision Trees, Regression, Random Forest, and other advanced techniques, to uncover patterns and make accurate predictions",
        },
        {
          question:
            "Which statistical tools do you use in your data science services?",
          Answer:
            "We utilize industry-standard statistical tools such as SAS, R, and Python, along with libraries like Pandas, Matplotlib, and Sci-kit, to perform robust statistical analysis and develop accurate models.",
        },
        {
          question: "How can data science solutions benefit my business?",
          Answer:
            "Data science solutions enable businesses to extract valuable insights from complex data, optimize decision-making, identify trends, and drive growth. By leveraging advanced algorithms and techniques, we help uncover hidden patterns and opportunities for success.",
        },
      ],
    },
    {
      ExpandedModel: "Business Analytics",
      // pic: BusinessAnalyticspic,
      pic: "https://s3-alpha-sig.figma.com/img/2f4f/067d/1350e02791b5ebb8ac504d3da370dc84?Expires=1691366400&Signature=Jb0jnabzYWHnpw9XysGgh1sgQBSgOw68X9qdomHot4pKDjKGZFAeGFA1L2b3KrCVPnIJfqqGJ0jFuB1zDk44wBrsP0-p06acYR0o7oXuqwRJ1fMqpCJQwRz1AETEFTD6Bbu5p9B-bFQmxMPI84J6zRDoJmgMDjwQtcylLx0gVyYMdqpr0dBD-h-hEzgPrEmg0SmbA7B0ZGFHbFUvxh~bO5KQSfwM2Nrfba46eQ37L5bWttZBqn5sHAPP4mmGrp3NK5R2enh8g8sq8nD4pktWTw0ZzlJKi4dQtIOP6sk8koC3LeDU96lHGDaxiXHT0oSbI667sH2jwGVOmAL-k4MW2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",

      Herotext: "Make smarter business decisions with our analytics solutions",

      Subtext:
        "Our business analytics solutions will help you make data-driven decisions to drive your business forward. Empower your team with data insights that drive success",
      topBenefits: [
        "Expertise in AI, ML, data engineering, and data science",
        "Actionable insights based on data analysis",
        "Expertise in data governance and management",
      ],
      Headline: "Why choose Teksett for business analytics solutions?",
      HeadlineText:
        "Teksett is a trusted provider of business analytics solutions, specializing in BI tools such as Power BI, Tableau, and Python. We recognize the significance of data-driven decision-making in the modern business landscape. Our commitment lies in delivering expertly tailored solutions that cater specifically to your business requirements.",

      FAQs: [
        {
          question: "What industries do you specialize in?",
          Answer:
            "We specialize in providing business analytics solutions for a wide range of industries, including healthcare, finance, manufacturing, insurance, retail, and more.",
        },
        {
          question: "What kind of data do you work with?",
          Answer:
            " We excel at handling diverse data types: structured, unstructured, big data, and IoT data. With BI tools like Power BI, Tableau, and Python, we transform this data into actionable intelligence for informed decision-making",
        },
        {
          question:
            "Can you customize your solutions to meet our specific business needs?",
          Answer:
            "Yes, we offer customized solutions tailored to your unique business needs. Our team will work with you to identify your specific requirements and develop a solution that meets your needs.",
        },
      ],
    },
    {
      ExpandedModel: "Project Management",
      pic: ProjectManagementpic,

      Herotext:
        "Let us take the lead and deliver the project your business deserves.",

      Subtext:
        "Our IT project management services are designed to help you maximize your IT investments, increase productivity, and achieve your business objectives.",
      topBenefits: [
        "Improved project outcomes",
        "Increased efficiency",
        "Enhanced collaboration",
      ],
      Headline: "Why choose Teksett for your project management",
      HeadlineText:
        "Our team of experienced project managers is dedicated to ensuring that your projects are delivered on time, within budget, and to your satisfaction. We understand that effective project management is crucial to the success of any IT initiative, and we take pride in our ability to deliver high-quality results that meet the unique needs of our clients.",

      FAQs: [
        {
          question:
            "What experience does your team have in IT project management?",
          Answer:
            "Our team has years of experience in managing IT projects across various industries and has a proven track record of delivering successful projects.",
        },
        {
          question:
            "How do you ensure that projects are delivered on time and within budget?",
          Answer:
            "We use a structured project management methodology that involves careful planning, risk management, and regular communication with stakeholders to ensure that projects are delivered on time and within budget.",
        },
        {
          question: "Can you help us with project planning and scoping?",
          Answer:
            "Yes, we offer project planning and scoping services to help you define your project requirements and create a detailed project plan.",
        },
      ],
    },
  ];
  // debugger
  const selected_extender = expanded.filter(
    ({ ExpandedModel }) => ExpandedModel.toLowerCase() === takePrams
  )[0];
  // console.log('log', takePrams);
  // console.log('log', selected_extender);
  if (!selected_extender) {
    return (
      <div className="">
        <p>No data found for the selected extender.</p>
      </div>
    );
  }
  return (
    <div className="">
      <CommonSelectedExtendedPage
        Herotext={selected_extender.Herotext}
        pic={selected_extender.pic}
        ExpandedModel={selected_extender.ExpandedModel}
        Subtext={selected_extender.Subtext}
        topBenefits={selected_extender.topBenefits}
        FAQs={selected_extender.FAQs}
        Headline={selected_extender.Headline}
        HeadlineText={selected_extender.HeadlineText}
      />
    </div>
  );
}

export function CommonSelectedExtendedPage({
  Herotext,
  pic,
  ExpandedModel,
  Subtext,
  topBenefits,
  FAQs,
  Headline,
  HeadlineText,
}) {
  return (
    <div className="p-2 m-1">
      <div className="row p-4 m-3">
        <div className="col-5">
          <img
            src={pic}
            className=" img-fluid p-2 mx-2"
            alt=""
          // height={"540px"}
          />
        </div>

        <div className="col">
          <span
            style={{
              // color: '#161616',
              fontSize: "12px",
              fontFamily: "Space Grotesk",
              // lineHeight: '12px',
              // letterSpacing: '1px',
              textTransform: "uppercase",
              borderRadius: "4px",

              background: "#EFEFEF",
              width: "200px",
              height: "11px",
              padding: "5px",
            }}>
            {ExpandedModel}
          </span>

          <div
            className="p-2 col-10"
            style={{
              color: "#161616",

              fontSize: "40px",
              fontFamily: "Barlow",
              // lineHeight: '70px',
              letterSpacing: "-1px",
            }}>
            {Herotext}
          </div>
          <div
            className=""
            style={{
              color: "#161616",
              fontSize: "25px",
              fontFamily: "Barlow",
              lineHeight: "33.6px",
              fontWeight: 400,
              padding: "10px",
              marginBottom: "50px",
              marginTop: "30px",
              opacity: "0.6000000238418579",
            }}>
            {Subtext}
          </div>

          <div className="p-2">Top Benefits</div>
          <div className="" id="points" style={{ fontSize: "13px" }}></div>

          {topBenefits.map((point) => (
            <div
              className="col-10 m-3 d-flex"
              style={{
                borderRadius: "4px",
                background: "rgba(0, 0, 0, 0.05)",
                width: "360px",
              }}>
              <div className="m-0">
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="Frame">
                    <path
                      id="Vector"
                      d="M6 0.984375C2.688 0.984375 0 3.67237 0 6.98438C0 10.2964 2.688 12.9844 6 12.9844C9.312 12.9844 12 10.2964 12 6.98438C12 3.67237 9.312 0.984375 6 0.984375ZM4.8 9.98438L1.8 6.98438L2.646 6.13837L4.8 8.28638L9.354 3.73237L10.2 4.58437L4.8 9.98438Z"
                      fill="#2FFF50"
                    />
                  </g>
                </svg>
              </div>
              <div
                className="m-1"
                style={{
                  color: "#161616",
                  fontSize: "10px",
                  fontFamily: "Space Grotesk",
                }}>
                {point}
              </div>
            </div>
          ))}

          <div
            className=""
            style={{
              textEdge: "cap",
              fontSize: "36px",
              margin: "50px 0px 40px 0px",
            }}>
            {Headline}
          </div>
          <div
            className="col-11"
            style={{
              color: "#161616",
              leadingTrim: "both",
              textEdge: "cap",
              fontSize: "23px",
              fontFamily: "Barlow",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "41.2px",
              letterSpacing: "-0.1px",
              margin: "50px 0px 40px 0px",
              opacity: "0.6000000238418579",
            }}>
            {HeadlineText}
          </div>
          <div
            className="btn btn-dark"
            style={{ fontSize: "13px", margin: "10px 0px 40px 0px" }}>
            Get in Touch
            <img src={rightarrow} alt="arrow" className=" p-1" />
          </div>
          <div
            className=""
            style={{
              color: "#0F46F5",
              fontSize: "24px",
              fontFamily: "Barlow",
              fontStyle: "normal",
              fontWeight: "600",
              margin: "50px 0px 40px 0px",
            }}>
            Frequently Asked Questions
          </div>
          {FAQs.map(({ question, Answer }) => (
            <CommonPlusOpen question={question} Answer={Answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
