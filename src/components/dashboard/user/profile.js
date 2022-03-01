import React, { useEffect, useState, Fragment } from "react"
import { useNavigate, Link, useParams } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from "formik"
import { isAuthentication } from "../../../shared/auth"
import * as yup from 'yup'
import { AddressAccounts, EditAccounts, updateImageProfile } from "../../../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_MESSAGE } from "../../../redux/constans/message";
import { getCookie } from "../../../shared/cookie";
import { loader } from "../../../shared/elements";
import { getLocalStorage } from "../../../shared/localStorage";
import"../../../styles/profile.css";



const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {

       
        dispatch({ type: CLEAR_MESSAGE })

    }, [])




    const { t } = useTranslation();

    const authorization = isAuthentication() ? { "Authorization": `bearer ${getCookie("token")}` } : [{ _id: "" }]
    const user = localStorage.getItem("user") ? getLocalStorage("user") : [{ _id: "" }]

    const { loading } = useSelector(state => state.loading)
    const { errorMsg, successMsg } = useSelector(state => state.message)




    //form
    const [initial, setInitial] = useState({
        fullname: "",
        lastname: "",
        email: "",
        password: "",
        rule : "admin",
    })


    const onSubmit = values => {


    }

    const initialValues = {
        fullname: "",
        lastname: "",
        email: "",
        password: "",
        rule : "admin",
    }


    const Validator = yup.object().shape({
        firstname: yup.string().required(t("firstname field is required")),
        lastname: yup.string().required(t("lastname field is required")),
        email: yup.string().required(t("email field is required")).email("email must be email"),
        address: yup.string().required(t("address field is required")),
        country: yup.string().required(t("country field is required")),
        city: yup.string().required(t("city field is required")),

    })



    const editAccount = () => {
    //     setInitial({
    //         firstname: user.firstname || "",
    //         lastname: user.lastname || "",
    //         email: user.email || "",
    //         address: user.address || "",
    //         country: user.country || "",
    //         city: user.city || "",
    //         state: user.state || "",
    //         phone: user.phone || "",
    //         postcode: user.postcode || "",
    //         password: ""
    //     })
     }





    // //upload image
    // const uploadImage = (e) => {

    //     if (e.target.files && e.target.files[0]) {
    //         const img = e.target.files[0];
    //         console.log(img);
    //         //return
    //         const formData = new FormData();
    //         formData.append('image', img);

    //         formData.append('size', 140);

    //         console.log(formData.get("image"));

    //         dispatch(set_single_image(formData, authorization, user._id))

    //     }
    // }




    return (

        <div className="pform">

            {loading && loader()}

            <div className="title">Registration</div>

            <div className="image-profile">
                <div>
                    <img
                        src="https://ectestone.herokuapp.com/v1/api/file/get-single-image/Naked-Singularity-2021-351x520__1645134802645.jpg/view" alt="edit" />
                    <input type="file" id="image-upload" className="image-upload" accept=".png, .jpg, .jpeg" />
                    <label htmlFor="image-upload"><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 32 32" width="20px" height="20px" src="https://ectestone.herokuapp.com/v1/api/file/get-single-image/ws-edit.svg/view" className="svg_img header_svg" alt="edit"><path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"></path></svg></label>
                </div>
            </div>

            <div className="content">

                {
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={Validator}>

                        {
                            ({ touched, errors, isValid, dirty }) => (

                                <Form>
                                    <div className="user-details">

                                        <div className="input-box">
                                            <span className="details">Full Name</span>
                                            <input type="text" placeholder="Enter your name" required />
                                            <small className="form-error">ccccccccccc</small>

                                        </div>


                                        <div className="input-box">
                                            <span className="details">{t("Email Address")}</span>
                                            <Field type="password" name="password" placeholder={t("Enter your password")} required="" />
                                            <small className="form-error">ccccccccccc</small>
                                        </div>

                                        <div className="input-box">
                                            <span className="details">{t("Email Address")}</span>
                                            <Field type="password" name="password" placeholder={t("Enter your password")} required="" />
                                            <small className="input-error" style={{ display: errors.password ? "block" : "none" }} >{touched.password && errors.password}</small>

                                        </div>

                                        <div className="input-box">
                                            <span className="details">Confirm Password</span>
                                            <input type="text" placeholder="Confirm your password" required />
                                            <small className="form-error">ccccccccccc</small>
                                        </div>

                                    </div>

                                    <div className="rule-details">
                                        <input type="radio" name="rule" id="admin" />
                                        <input type="radio" name="rule" id="supadmin" />
                                        <span className="rule-title">Rule</span>
                                        <div className="rules">
                                            <label htmlFor="admin">
                                                <span className="btn one"></span>
                                                <span className="rule">Admin</span>
                                            </label>
                                            <label htmlFor="supadmin">
                                                <span className="btn two"></span>
                                                <span className="rule">Super Admin</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="form-error">
                                        {errorMsg && <span>{typeof errorMsg == "string" ? t(errorMsg) : t(errorMsg[0])}</span>}
                                    </div>

                                    <div className="button">
                                        <input disabled={(!dirty || !isValid || loading)} type="submit" value="Register" />
                                    </div>

                                </Form>


                            )

                        }</Formik>}

            </div>
        </div>




    );
}

export default Profile;
