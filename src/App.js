import React, { Suspense, lazy } from "react";
import {useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./utils/PrivateRoute";
import JobStep1 from "./pages/Register/Scholarships/jobs/JobStep1";
import JobStep2 from "./pages/Register/Scholarships/jobs/JobStep2";
import JobStep3 from "./pages/Register/Scholarships/jobs/JobStep3";
import Main from "./pages/ContactUs/Main";
import SportsUI from "./pages/Sports/Sports";
import RSSUsage from "./pages/share/RSSUsage";
import Privacy from "./pages/policyPage";
import ScholarshipDetailsPage from "./pages/Dashboard/scholarship/ScholarshipDetailsPage";
import BlogDetails from "./pages/Blog/BlogDetails";
import ScrollToTop from "./components/ScrollTop";
// import FormOne from "./pages/Sports/FormOne";

// Lazy-loaded components
const Home = lazy(() => import("./pages/HomePage"));
const Otp = lazy(() => import("./pages/otp"));
const ChangePassword = lazy(() => import("./pages/changepassword"));
const AboutUs = lazy(() => import("./pages/AboutUs/index"));
const Blog = lazy(() => import("./pages/Blog"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Testimonals = lazy(() => import("./pages/Testimonals"));
const Stepper = lazy(() => import("./pages/Register/Scholarships"));
const Sports = lazy(() => import("./pages/Register/Scholarships/Sports"));
const FindScholarship = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Scholarships/Login"));
const Signin = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const PasswordReset = lazy(() => import("./pages/PasswordReset"));
const Payment = lazy(() => import("./pages/payment"));
const PaymentJobs = lazy(() => import("./pages/payment/jobs"));
const RootScholarship = lazy(() => import("./pages/Dashboard/scholarship"));
const MainProfile = lazy(() => import("./pages/Dashboard/Profile"));
const Accordion = lazy(() => import("./accordion/Accordion"));
const RootApplication = lazy(() => import("./pages/Dashboard/applications"));
const StepperElementTwo = lazy(() =>         
    import("./pages/Register/Scholarships/sports/StepperElementTwo")
);
const StepperElementThree = lazy(() =>
    import("./pages/Register/Scholarships/sports/StepperElementThree.")
);

const FinalStepperElement = lazy(() =>
    import("./pages/Register/Scholarships/sports/FinalStepperElement")
);

const StepperElementFour = lazy(() =>
    import("./pages/Register/Scholarships/StepperElementFour")
);
const StepperElementSix = lazy(() =>
    import("./pages/Register/Scholarships/StepperElementSix")
);
const StepperElement7 = lazy(() =>
    import("./pages/Register/Scholarships/StepperElement7")
);
const StepElement8 = lazy(() =>
    import("./pages/Register/Scholarships/StepElement8")
);
const StepComfirmation = lazy(() =>
    import("./pages/Register/Scholarships/StepComfirmation")
);
const Index = lazy(() => import("../src/pages/profile/index"));
const Favorite = lazy(() => import("./pages/favorite"));
const PaymentStatus = lazy(() => import("./pages/paymentStatus/index"));

// useEffect(() => {
//     const requestPermission = async () => {
//       try {
//         const permission = await Notification.requestPermission();
//         if (permission === "granted") {
//           const token = await getToken(messaging, {
//             vapidKey: "BOQ4npi0BdciSPjBIJ4AaQ7U8SIw01zFOXctCPgOB9me9N33ng53tMwsDMH5tm80AcnB8RoMQWyI9FbLJAz9s0I",
//           });
//           console.log("FCM Token:", token);

//           if (token) {
//             localStorage.setItem("fcmToken", token);
//           }

//           //Save the token in fcmToken in the backend 
//           const authToken = localStorage.getItem("token"); // or however you store your JWT

//           await fetch("https://localhost:4000/api/v1/user/save/fcmToken", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${authToken}`,
//             },
//             body: JSON.stringify({ fcmToken: token }),
//           });

//         } else {
//           console.log("Notification permission denied");
//         }
//       } catch (error) {
//         console.error("Error getting FCM token:", error);
//       }
//     };

//     requestPermission();

//     // Foreground message handler
//     onMessage(messaging, (payload) => {
//       console.log("Message received. ", payload);
//       alert(payload.notification.title + ": " + payload.notification.body);
//     });
//   }, []);


const App = () => {
    return (
        <Suspense
            fallback={
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "18rem",
                    }}
                >
                    <img
                        style={{
                            width: "7rem ",
                            height: "7rem",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        src="/images/loader.gif"
                        alt="loading..."
                    />{" "}
                </div>
            }
        >
            <Switch>
                <Route exact path="/index" component={Index} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/login/:userId" component={Login} />
                <Route exact path="/payment-status" component={PaymentStatus} />

                <Route
                    exact
                    path="/forgot/password"
                    component={ForgotPassword}
                />
                <Route 
                    exact
                    path="/otp"
                    component={Otp}
                />
                <Route 
                    exact
                    path="/changepassword"
                    component={ChangePassword}
                />
                <Route
                    path="/reset-password/:token"
                    component={PasswordReset}
                />
                <Route exact path="/scholars" component={RootScholarship} />
                <Route exact path="/favorite" component={Favorite} />
                <PrivateRoute exact path="/profile" component={MainProfile} />
                <Route exact path="/verify" component={StepComfirmation} />
                <Route
                    exact
                    path="/details/:id"
                    component={ScholarshipDetailsPage}
                />
                <Route exact path="/policy" component={Privacy} />
                <Route exact path="/share" component={RSSUsage} />
                <Route exact path="/player" component={Sports} />
                {/* <Route exact path="/create" component={FormOne} /> */}

                <PrivateRoute
                    exact
                    path="/applications"
                    component={RootApplication}
                />

                <Route exact path="/sports" component={Sports} />
                <Route exact path="/starting" component={StepperElementTwo} />
                <Route
                    exact
                    path="/residence"
                    component={StepperElementThree}
                />
                <Route
                    exact
                    path="/sportsfinal"
                    component={FinalStepperElement}
                />
                <Route exact path="/login" component={Login} />
                <Route exact path="/final" component={StepElement8} />
                <Route exact path="/JobStep3" component={JobStep3} />

                <Layout>
                    <PrivateRoute path="/payment" component={Payment} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Route exact path="/stepper" component={Stepper} />
                    <Route exact path="/JobStep1" component={JobStep1} />
                    <Route exact path="/JobStep2" component={JobStep2} />
                   
                    <Route
                        exact
                        path="/educationlevel"
                        component={StepperElementFour}
                    />
                     <Route exact path="/route1" component={StepperElementSix} />
                     <Route exact path="/route2" component={StepperElement7} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/:id" component={BlogDetails} />
                    <Route
                        exact
                        path="/admissions"
                        component={FindScholarship}
                    />
                    <Route exact path="/sport" component={SportsUI} />
                    <Route
                        exact
                        path="/admissions/:userId"
                        component={FindScholarship}
                    />

                    <Route exact path="/contactus" component={Main} />
                    <Route exact path="/payjobs" component={PaymentJobs} />
                 
                    <Route exact path="/scholarships" component={Accordion} />
                    <Route exact path="/testimonals" component={Testimonals} />
                    <Route exact path="/" component={Home} />
                </Layout>
            </Switch>
        </Suspense>
    );
};

export default App;
