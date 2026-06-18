import React, { Suspense, lazy } from "react";
import {useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
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
    import("./pages/Register/Scholarships/sports/StepperElementThree")
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
            <Routes>
                {/* Public routes without Layout */}
                <Route path="/index" element={<Index />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/login/:userId" element={<Login />} />
                <Route path="/payment-status" element={<PaymentStatus />} />
                <Route path="/forgot/password" element={<ForgotPassword />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/changepassword" element={<ChangePassword />} />
                <Route path="/reset-password/:token" element={<PasswordReset />} />
                <Route path="/scholars" element={<RootScholarship />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/verify" element={<StepComfirmation />} />
                <Route path="/details/:id" element={<ScholarshipDetailsPage />} />
                <Route path="/policy" element={<Privacy />} />
                <Route path="/share" element={<RSSUsage />} />
                <Route path="/player" element={<Sports />} />
                <Route path="/sports" element={<Sports />} />
                <Route path="/starting" element={<StepperElementTwo />} />
                <Route path="/residence" element={<StepperElementThree />} />
                <Route path="/sportsfinal" element={<FinalStepperElement />} />
                <Route path="/login" element={<Login />} />
                <Route path="/final" element={<StepElement8 />} />
                <Route path="/JobStep3" element={<JobStep3 />} />

                {/* Private routes without Layout */}
                <Route element={<PrivateRoute />}>
                    <Route path="/profile" element={<MainProfile />} />
                    <Route path="/applications" element={<RootApplication />} />
                </Route>

                {/* Routes with Layout */}
                <Route element={<Layout />}>
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/stepper" element={<Stepper />} />
                    <Route path="/JobStep1" element={<JobStep1 />} />
                    <Route path="/JobStep2" element={<JobStep2 />} />
                    <Route path="/educationlevel" element={<StepperElementFour />} />
                    <Route path="/route1" element={<StepperElementSix />} />
                    <Route path="/route2" element={<StepperElement7 />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogDetails />} />
                    <Route path="/admissions" element={<FindScholarship />} />
                    <Route path="/sport" element={<SportsUI />} />
                    <Route path="/admissions/:userId" element={<FindScholarship />} />
                    <Route path="/contactus" element={<Main />} />
                    <Route path="/payjobs" element={<PaymentJobs />} />
                    <Route path="/scholarships" element={<Accordion />} />
                    <Route path="/testimonals" element={<Testimonals />} />
                    <Route path="/" element={<Home />} />

                    {/* Private routes inside Layout */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/payment" element={<Payment />} />
                    </Route>
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
