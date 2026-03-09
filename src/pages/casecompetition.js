import React, { useEffect } from "react"
import { CoverLayout } from "../components/Layout"
import ImageCover from "../components/ImageCover"
import bainLogo from "../images/bain_logo.png"
import dspLogo from "../images/dsp_seal.png"
import dcLogo from "../images/180dc_logo.png"

export default () => {

    useEffect(() => {

        const sections = document.querySelectorAll(".fade-section")

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1"
                        entry.target.style.transform = "translateY(0px)"
                    }
                })
            }, { threshold: 0.15 }
        )

        sections.forEach(section => {
            section.style.opacity = "0"
            section.style.transform = "translateY(30px)"
            section.style.transition = "all 0.8s ease"
            observer.observe(section)
        })

    }, [])

    return (

        <
        CoverLayout navbarTextColor = "white"
        backgroundColor = "#000000"
        textColor = "#ffffff"
        coverElement = { <
            ImageCover
            text = "Case Competition"
            coverImage = "case_comp_cover.png"
            textColor = "white"
            darkGradient /
            >
        } >

        { /* LOGOS */ }

        <
        div style = {
            {
                display: "flex",
                justifyContent: "center",
                gap: "50px",
                alignItems: "center",
                marginTop: "-150px",
                marginBottom: "40px"
            }
        } >

        <
        img src = { dspLogo }
        alt = "Delta Sigma Pi"
        style = {
            {
                height: "115px",
                transition: "transform .25s"
            }
        }
        onMouseEnter = { e => e.currentTarget.style.transform = "scale(1.06)" }
        onMouseLeave = { e => e.currentTarget.style.transform = "scale(1)" }
        />

        <
        img src = { dcLogo }
        alt = "180 Degrees Consulting"
        style = {
            {
                height: "115px",
                transition: "transform .25s"
            }
        }
        onMouseEnter = { e => e.currentTarget.style.transform = "scale(1.06)" }
        onMouseLeave = { e => e.currentTarget.style.transform = "scale(1)" }
        />

        <
        img src = { bainLogo }
        alt = "Bain & Company"
        style = {
            {
                height: "85px",
                transition: "transform .25s"
            }
        }
        onMouseEnter = { e => e.currentTarget.style.transform = "scale(1.06)" }
        onMouseLeave = { e => e.currentTarget.style.transform = "scale(1)" }
        />

        <
        /div>


        { /* ORGANIZATION LINE */ }

        <
        div style = {
            { textAlign: "center", marginBottom: "40px", fontFamily: "inherit" }
        } >

        <
        h2 style = {
            { fontSize: "30px" }
        } >
        Delta Sigma Pi { " " }× { " " }
        180 Degrees Consulting { " " }× { " " }
        Bain <
        /h2>

        <
        /div>


        { /* TAGLINE */ }

        <
        div className = "fade-section"
        style = {
            {
                maxWidth: "900px",
                margin: "auto",
                padding: "0px 40px 50px 40px",
                textAlign: "center",
                lineHeight: "1.7",
                fontFamily: "inherit"
            }
        } >

        <
        p style = {
            { fontSize: "19px", opacity: .9 }
        } >
        This spring, UCI’ s Delta Sigma Pi and 180 Degrees Consulting are co - hosting a Case Competition with Bain & Company. { " " }
        We encourage anyone to participate, regardless of experience or major!{ " " }
        Learn more below. <
        /p>

        <
        a href = "https://deltasigmapi.fillout.com/casecomp"
        target = "_blank"
        rel = "noopener noreferrer"
        style = {
            {
                display: "inline-block",
                marginTop: "35px",
                padding: "18px 42px",
                border: "2px solid white",
                borderRadius: "30px",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "18px",
                transition: "all .25s ease"
            }
        }
        onMouseEnter = {
            e => {
                e.currentTarget.style.transform = "translateY(-2px)"
                e.currentTarget.style.background = "rgba(255,255,255,0.08)"
            }
        }
        onMouseLeave = {
            e => {
                e.currentTarget.style.transform = "translateY(0px)"
                e.currentTarget.style.background = "transparent"
            }
        } >

        Click to fill out the Interest Form→

        <
        /a>

        <
        /div>



        { /* WHY PARTICIPATE */ }

        <
        div className = "fade-section"
        style = {
            {
                maxWidth: "1000px",
                margin: "auto",
                padding: "40px 40px 70px 40px",
                fontFamily: "inherit"
            }
        } >

        <
        h1 style = {
            {
                textAlign: "center",
                fontSize: "42px",
                marginBottom: "45px"
            }
        } >
        Why Participate ?
        <
        /h1>


        <
        div style = {
            {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "30px"
            }
        } >


        { /* CARD */ }

        <
        div style = {
            {
                background: "#1a1a1a",
                padding: "35px",
                borderRadius: "10px",
                transition: "transform .25s"
            }
        }
        onMouseEnter = { e => e.currentTarget.style.transform = "translateY(-5px)" }
        onMouseLeave = { e => e.currentTarget.style.transform = "translateY(0px)" } >

        <
        h3 style = {
            { marginBottom: "12px", fontSize: "22px" }
        } >
        Skill Development <
        /h3>

        <
        p style = {
            { opacity: .85 }
        } >
        Hone key skills in strategy, analysis, teamwork, and presentation by tackling a real - world business problem. { " " }
        These practical abilities are valuable across consulting, business, and other industries. <
        /p>

        <
        /div>


        <
        div style = {
            {
                background: "#1a1a1a",
                padding: "35px",
                borderRadius: "10px",
                transition: "transform .25s"
            }
        }
        onMouseEnter = { e => e.currentTarget.style.transform = "translateY(-5px)" }
        onMouseLeave = { e => e.currentTarget.style.transform = "translateY(0px)" } >

        <
        h3 style = {
            { marginBottom: "12px", fontSize: "22px" }
        } >
        Professional Opportunities <
        /h3>

        <
        p style = {
            { opacity: .85 }
        } >
        Engage directly with Bain & Company professionals through networking events, coffee chats, and Q & A sessions, { " " }
        gaining insight into the consulting industry and potential career paths. <
        /p>

        <
        /div>


        <
        div style = {
            {
                background: "#1a1a1a",
                padding: "35px",
                borderRadius: "10px",
                transition: "transform .25s"
            }
        }
        onMouseEnter = { e => e.currentTarget.style.transform = "translateY(-5px)" }
        onMouseLeave = { e => e.currentTarget.style.transform = "translateY(0px)" } >

        <
        h3 style = {
            { marginBottom: "12px", fontSize: "22px" }
        } >
        Consulting Experience <
        /h3>

        <
        p style = {
            { opacity: .85 }
        } >
        Apply structured problem - solving and frameworks used by top consulting firms
        while working on a live
        case . { " " }
        Gain a taste of the consulting workflow and the challenges consultants face. <
        /p>

        <
        /div>


        <
        div style = {
            {
                background: "#1a1a1a",
                padding: "35px",
                borderRadius: "10px",
                transition: "transform .25s"
            }
        }
        onMouseEnter = { e => e.currentTarget.style.transform = "translateY(-5px)" }
        onMouseLeave = { e => e.currentTarget.style.transform = "translateY(0px)" } >

        <
        h3 style = {
            { marginBottom: "12px", fontSize: "22px" }
        } >
        Mentorship <
        /h3>

        <
        p style = {
            { opacity: .85 }
        } >
        Receive guidance from experienced mentors who provide feedback, help refine your approach, { " " }
        and share insights on navigating
        case competitions and consulting projects. <
        /p>

        <
        /div>

        <
        /div> < /
        div >



        { /* DIVIDER */ }

        <
        div style = {
            {
                borderTop: "1px solid rgba(255,255,255,.1)",
                width: "70%",
                margin: "40px auto"
            }
        }
        />



        { /* FAQ */ }

        <
        div className = "fade-section"
        style = {
            {
                maxWidth: "900px",
                margin: "auto",
                padding: "20px 40px 80px 40px",
                fontFamily: "inherit"
            }
        } >

        <
        h1 style = {
            {
                textAlign: "center",
                fontSize: "42px",
                marginBottom: "40px"
            }
        } >
        FAQ <
        /h1>


        <
        details style = {
            {
                background: "#1a1a1a",
                padding: "22px 28px",
                marginBottom: "18px",
                borderRadius: "8px"
            }
        } >
        <
        summary style = {
            { fontWeight: "bold", fontSize: "20px" }
        } >
        When will the competition be ?
        <
        /summary>

        <
        p style = {
            { marginTop: "15px", opacity: .85 }
        } >
        The Case Competition will take place in Spring 2026, starting Week 3. { " " }
        More details will be released soon. <
        /p>

        <
        /details>



        <
        details style = {
            {
                background: "#1a1a1a",
                padding: "22px 28px",
                marginBottom: "18px",
                borderRadius: "8px"
            }
        } >
        <
        summary style = {
            { fontWeight: "bold", fontSize: "20px" }
        } >
        Who can participate ?
        <
        /summary>

        <
        p style = {
            { marginTop: "15px", opacity: .85 }
        } >
        Any UC Irvine undergraduate student can participate regardless of major or experience level. <
        /p>

        <
        /details>



        <
        details style = {
            {
                background: "#1a1a1a",
                padding: "22px 28px",
                marginBottom: "18px",
                borderRadius: "8px"
            }
        } >
        <
        summary style = {
            { fontWeight: "bold", fontSize: "20px" }
        } >
        What is a
        case competition ?
        <
        /summary>

        <
        p style = {
            { marginTop: "15px", opacity: .85 }
        } >
        Case competitions simulate real consulting challenges where teams analyze business problems and present strategic recommendations to judges. <
        /p>

        <
        /details>



        <
        details style = {
            {
                background: "#1a1a1a",
                padding: "22px 28px",
                marginBottom: "18px",
                borderRadius: "8px"
            }
        } >
        <
        summary style = {
            { fontWeight: "bold", fontSize: "20px" }
        } >
        What will I gain ?
        <
        /summary>

        <
        p style = {
            { marginTop: "15px", opacity: .85 }
        } >
        Participants gain hands - on consulting experience, mentorship, networking opportunities, { " " }
        and the chance to work on a real - world business
        case . <
        /p>

        <
        /details>

        <
        /div>

        <
        /CoverLayout>
    )

}