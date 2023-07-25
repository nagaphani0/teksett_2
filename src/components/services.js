import CommonIS, { CommonPageHead } from './common'
import one from '../images/sysfacts-work-environemnt-0.jpg.png'
import two from '../images/sysfacts-work-environemnt-12-1.jpg.png'
// import three from '../images/sysfacts-work-environemnt-3.jpg.png'
// import four from '../images/sysfacts-work-environemnt-4.jpg.png'
// import five from '../images/sysfacts-work-environemnt-5.jpg.png'
import Offshorepic from '../images/services/offshore.png'
// import SoftwareVARpic from '../images/services/extended/Software VAR.png'
import ITconsultancypic from '../images/services/itconsul.png'
import StaffAugmentationpic from '../images/services/Staff Augmentation services.png'
import ProjectManagemenpic from '../images/services/ProjectManageme.png'
import ITSolutionsdeliverypic from '../images/services/IT Solutions delivery.png'
import DataScienceSolutionspic from '../images/services/datasci.png'
import BusinessAnalyticspic from '../images/services/dataanalysis.png'
import Productdevelopmentpic from '../images/services/productdovlop.png'
import DataEngineeringpic from '../images/services/dataengening.png'

export const ServicesBox = [{
    pic: ITSolutionsdeliverypic,
    title: 'IT Solutions delivery',
    des: "At Teksett, we understand that your business relies on efficient and effective IT solutions. That's why we offer a comprehensive range of services to help you streamline your operations, reduce costs, and maximize productivity.",
    points: ['High level of expertise', 'Customized IT Solutions', 'Collaborative approach to work']
},
{
    pic: StaffAugmentationpic,
    title: 'Staff Augmentation services',
    des: 'Our IT staffing services offer a range of solutions to help you find the right talent for your business needs. From web developers to IT recruiters, our team of experts can help you find the perfect candidate to fill your IT staffing requirements.',
    points: ['Cost-effective', 'Access to top 5% talents', 'Reduce hiring time']
},
{
    pic: DataScienceSolutionspic,

    title: 'Data Science Solutions',
    des: "Harness the power of your data with Teksett's expertise in machine learning algorithms and advanced statistical tools. Our tailored solutions drive actionable insights and empower you to make informed decisions for exponential growth",
    points: ['Precise predictive modeling capabilities', 'Robust data analysis techniques', 'Reliable and accurate results']
}, {
    pic: BusinessAnalyticspic,
    title: 'Business Analytics',
    des: 'Our business analytics solutions will help you make data-driven decisions to drive your business forward. Empower your team with data insights that drive success.',
    points: ['Expertise in AI, ML, data engineering, and data science', 'Actionable insights based on data analysis', 'Improved business performance']

}, {
    pic: Offshorepic,

    title: 'Offshore Development',
    des: "Teksett excels in offshore development services, allowing seamless collaboration with your team, regardless of geographical constraints. Our comprehensive IT solutions are tailored to meet your organization's specific needs and deliver optimal results.",
    points: ['Global Talent Access', 'Seamless Collaboration', 'Cost-Effective Solutions ']

}, {
    pic: one,
    title: 'Software VAR',
    des: 'As a value-added reseller (VAR) for Microsoft and Oracle, we provide comprehensive software solutions that enable businesses to increase efficiency, productivity, and profitability.',
    points: ['Comprehensive software solutions', 'Expert support', 'Streamlined processes']

},
{
    pic: ITconsultancypic,
    title: 'IT Consultancy',
    des: 'At Teksett, we take pride in our years of experience in the industry. Our team of experts is well-equipped to provide you with tailored solutions that meet your unique IT needs.',
    points: ['Cost Savings', 'Competitive Edge', 'Enhanced Security']

}, {
    pic: two,
    title: 'Corporate IT Training Services',
    des: "At Teksett, we understand that the success of your business depends on the knowledge and skills of your team. That's why we offer comprehensive corporate IT training services designed to enhance your team's capabilities and help your organization achieve its goals.",
    points: ['Enhanced Employee Retention', 'Cost-effective', 'Customized Training Programs']

}, {
    pic: ProjectManagemenpic,
    title: 'Project Management',
    des: "Our IT project management services are designed to help you maximize your IT investments, increase productivity, and achieve your business objectives.",
    points: ['Improved project outcomes', 'Increased efficiency', 'Enhanced collaboration']

}, {
    pic: Productdevelopmentpic,
    title: 'Product development',
    des: "From ideation to launch, we'll be with you every step of the way. Our product development process is designed to help you innovate and stay ahead of the competition.",
    points: ['Experienced developers and designers', 'Quick turnaround times and efficient project management', 'Continuous communication and transparency']

}, {
    pic: DataEngineeringpic,
    title: 'Data Engineering',
    des: "Teksett specializes in delivering expert data engineering services, offering clients efficient and reliable solutions for effective data management and optimization.",
    points: ['Advanced Data Analytics', 'Data Quality and Integrity', 'Continuous communication and transparency', 'Scalable Data Solutions']

},]

export default function Services() {
    return (
        <div>
            <CommonPageHead title={'Teksett: Providing you with Top-notch IT solutions for your business'} page={'Services'} />
            {ServicesBox.map(({ pic, title, des, points }) => (

                <CommonIS pic={pic} title={title} des={des} points={points} mainlin={'services'} />
            ))}
        </div>


    )
}




