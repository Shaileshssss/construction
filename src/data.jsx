import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { Team_1,Team_3,Team7,Product_1,Product_2,Product_3,Product_4,Product_5,Product_6,Profile_1,Profile_2,Profile_3,Profile_4,Blog_1,Blog_2,Blog_3, Team_2} from "./assets";
        import { TiThMenu } from 'react-icons/ti';

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Project",id:'project'},
    {name:"Testimonial",id:'testimonial'},
    {name:"Blog",id:'blog'},
];

export const services = [
  {
    name:"General Contracting",
    icon:<SiBlueprint/>,
    description:`This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },
  {
    name:"Design-Build Services",
    icon:<FaDrawPolygon/>,
    description:`This service combines both the design and construction phases into a single 
       contract, streamlining the process and improving communication between the design and
        construction teams.

    `,
  },
  {
    name:"Project Management",
    icon:<GrUserManager/>,
    description:`Construction companies often provide project management services, which include 
       planning, coordinating, and overseeing projects to ensure they are completed on time, within 
       budget, and to the required quality standards.`,
  },
  {
    name:"Renovation and Remodeling",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    name:"Site Preparation",
    icon:<AiOutlineFileProtect/>,
    description:`Before construction begins, companies often handle site preparation tasks such 
    as land clearing, excavation, grading, and utility installation to ensure the site is ready 
    for building.`,
  },
  {
    name:"Specialty Construction Services",
    icon:<IoConstructSharp/>,
    description:`This can include services like roofing, concrete work, steel erection, plumbing, 
    electrical work, and other specialized trades necessary for specific aspects of the construction project.`,
  },
]

export const teams = [
  {
    name:"Rajesh",
    title:"Technician",
    profile:Team_1,
    experience: "Exp: 15+ years",
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Rakesh",
    title:"Sr.Manager",
    profile:Team_2,
    experience: "Exp: 22+ years",
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Juli Joseph",
    title:"Technician",
    profile:Team_3,
    experience: "Exp: 8+ years",
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mala Lakshmi",
    title:"Mechanic",
    profile:Team7,
    experience: "Exp: 10+ years",
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"1. Backhoe Loader",
    image:Product_1,
    description:`JCB Backhoe Loader is a product that resonates with trust and is also iconic as it represents the industry. It is the path-breaking features of this machine that
     have kept us on the top of the leader board. JCB backhoe loaders are highly adaptable to different applications and are highly versatile to be used in various construction projects.`,
  },
  {
    title:"2. JCB Single Drum Soil Compactor",
    image:Product_2,
    description:`JCB has been pioneering the Telehandlers concept since 1977 and is today, the world’s leading manufacturer of Telehandlers, offering a range from 7 meter to 20 meter placing height. 
With a wide range of attachments customized for specific applications in various industries, JCB Telehandlers come with an all-new global side engine design to enhance reliability, safety and comfort while delivering high productivity at your worksite.`,
  },
  {
    title:"3. JCB Vibratory Randem Rollers",
    image:Product_3,
    description:`JCB’s vibratory tandem road rollers are designed to be class leaders.
Weighing between 1 680 kg and 9 250 kg, JCB Tandem Roller is developed for reliability, low cost of operation, operation safety, serviceability, maneuverability, performance, operator comfort and best in class durability. `,
  },
  {
    title:"4. JCB Super Loader",
    image:Product_4,
    description:`Designed as a material handling solution that caters to multiple industrial needs, the Super Loader comes with fully customisable attachments and a water separator provided to ensure greater reliability and longer fuel pump life, amongst other benefits.`,
  },
  {
    title:"5. JCB Telehandler",
    image:Product_5,
    description:`JCB has been pioneering the Telehandlers concept since 1977 and is today, the world’s leading manufacturer of Telehandlers, offering a range from 7 meter to 20 meter placing height. 
With a wide range of attachments customized for specific applications in various industries, JCB Telehandlers come with an all-new global side engine design to enhance reliability, safety and comfort while delivering high productivity at your worksite.`,
  },
  {
    title:"6. JCB Excavator",
    image:Product_6,
    description:`The best-in-class range of JCB Excavators comprises heavy-duty Excavators that exhibit maximum performance, strength, efficiency and productivity. For over four decades, JCB has been a name to be reckoned with among the excavator 
    manufacturers of the world. Our innovative and technologically advanced Excavators are manufactured at JCB’s state-of-the-art manufacturing facility in Pune. Also known as Diggers, JCB Excavators have played a key role in India’s urbanization.`,
  },
];


export const testimonial = [
  {
    image:Profile_1,
    name:'Josh',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:Profile_2,
    name:'Rekha J',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:Profile_3,
    name:'Vijay',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:Profile_4,
    name:'Puneeth',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  }

];


export const blogs = [
  {
      title:"Sustainable Construction: Building for the Future",
      image:Blog_1,
      category:"Agriculter",
      content:`
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
      date:new Date("January 10, 2024"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"Industry Purpose Equipments",
      image:Blog_3,
      category:"Industry",
      content:`
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
      date:new Date("December 15, 2023"),
      likeCount:201,
      commentCount:123,
      tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
      poster:{
          name:"Bissi",
      },
  },
  {
      title:"500 Acre Hi-Tech Factory",
      image:Blog_2,
      category:"Innovations",
      content:`
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
      date:new Date("July 20, 2023"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
  },
];


export const contacts = [
  {
    name:"Email",
    value:"sshaileshs14079@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+91 807 3921 809",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"BEL Road, Bengaluru Karnataka",
    icon:<IoLocationOutline/>,
  },
]


export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          {name:"Project",id:'project'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
]


