import resumeAsset from "@/assets/Harsha_DataAnalyst_Resume.pdf.asset.json";
import olistImg from "@/assets/olist.png.asset.json";
import adventureWorksImg from "@/assets/adventure-works.png.asset.json";
import bankLoanImg from "@/assets/bank-loan.jpg.asset.json";
import courseRecImg from "@/assets/course-recommendation.png.asset.json";
import iplImg from "@/assets/ipl.png.asset.json";

export const profile = {
  name: "Harsha Vardhan Raju Karapa",
  shortName: "Harsha Vardhan",
  headline: "Data Analyst | Data Science | Business Intelligence",
  location: "Hyderabad, Telangana, India",
  email: "harshavardhan.karapa@gmail.com",
  linkedin: "https://www.linkedin.com/in/harsha-vardhan-raju-karapa/",
  github: "https://github.com/HarshaVardhan2824",
  resume: resumeAsset.url,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  { label: "B.Tech", value: "8.67 CGPA" },
  { label: "Data Analytics", value: "SQL • Excel • Power BI • Tableau" },
  { label: "Data Science", value: "Python • ML • Scikit-learn" },
  { label: "Projects", value: "Analytics • BI • ML" },
];

export const whatIDo = [
  {
    title: "Data Analytics",
    description:
      "Transforming raw data into useful insights through cleaning, EDA, SQL analysis, validation, and reporting.",
    tools: ["Python", "SQL", "Excel", "Pandas"],
  },
  {
    title: "Business Intelligence",
    description:
      "Building interactive dashboards and KPI-driven reports for business performance analysis.",
    tools: ["Power BI", "Tableau", "Power Query", "DAX"],
  },
  {
    title: "Data Science",
    description:
      "Applying machine learning, feature engineering, and recommendation techniques to solve analytical problems.",
    tools: ["Python", "Scikit-learn", "XGBoost", "LightGBM"],
  },
];

export const skillCategories = [
  {
    title: "Programming & Query",
    skills: ["Python", "SQL", "MySQL", "SQLite"],
  },
  {
    title: "Data Analysis",
    skills: [
      "EDA",
      "Data Cleaning",
      "Data Validation",
      "Statistical Analysis",
      "Data Modeling",
    ],
  },
  {
    title: "BI & Visualization",
    skills: [
      "Power BI",
      "Tableau",
      "Power Query",
      "DAX",
      "KPI Reporting",
      "Dashboard Development",
    ],
  },
  {
    title: "Excel",
    skills: [
      "Advanced Excel",
      "Pivot Tables",
      "VLOOKUP",
      "XLOOKUP",
      "Power Query",
      "VBA",
      "Macros",
    ],
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Regression",
      "Classification",
      "Unsupervised Learning",
      "XGBoost",
      "LightGBM",
      "SVM",
      "KNN",
      "Feature Engineering",
      "TF-IDF",
      "Cosine Similarity",
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "AWS VPC",
      "Route 53",
      "CloudWatch",
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
      "RStudio",
      "Streamlit",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    id: "olist",
    image: olistImg.url,
    imageAlt: "Olist e-commerce sales and delivery analysis dashboard",
    title: "Olist E-Commerce Store Analysis",
    category: "Analytics • BI",
    description:
      "End-to-end e-commerce analytics project analyzing sales, customers, products, delivery performance, and business trends using SQL, Excel, Power BI, and Tableau.",
    tech: ["Excel", "SQL", "Power BI", "Tableau"],
    github: "https://github.com/HarshaVardhan2824/Olist-Ecommerce-Store-Analysis",
    problem:
      "A Brazilian marketplace dataset spanning orders, payments, reviews, sellers and logistics needed a consolidated view of commercial and delivery performance.",
    approach:
      "Cleaned and joined multiple relational tables in SQL, validated data quality in Excel, modelled measures with Power Query and DAX, then built Power BI and Tableau dashboards for sales, customer and delivery views.",
    outcome:
      "A single analytics layer surfacing revenue trends, category performance, repeat-customer behaviour and late-delivery drivers.",
  },
  {
    id: "adventure-works",
    image: adventureWorksImg.url,
    imageAlt: "Adventure Works sales and profit Power BI dashboard",
    title: "Adventure Works – Sales & Profit Analysis",
    category: "Business Intelligence",
    description:
      "Business intelligence project analyzing sales, profit, customers, products, and regional performance using SQL, Excel, Power BI, and Tableau.",
    tech: ["SQL", "Power BI", "Excel", "Tableau"],
    github: "https://github.com/HarshaVardhan2824/Adventure-Works-BI-Project",
    problem:
      "Sales leadership needed clarity on which regions, products and customer segments were actually driving profit, not just revenue.",
    approach:
      "Built a star-schema style model over the Adventure Works data, wrote SQL aggregations for margin analysis, and created KPI-led dashboards with drill-down by region, product line and time.",
    outcome:
      "Comparative profit and margin reporting that separates high-volume products from high-margin products across regions.",
  },
  {
    id: "bank-loan",
    image: bankLoanImg.url,
    imageAlt: "Bank loan customer analytics dashboard",
    title: "Bank Loan Customer Analytics",
    category: "Analytics • Risk",
    description:
      "Customer and loan analytics project analyzing a 31.1M loan portfolio, repayment behavior, customer patterns, and credit-risk related insights.",
    tech: ["SQL", "Power BI", "Excel", "Tableau"],
    github: "https://github.com/HarshaVardhan2824/Bank-Loan-Customer-Analytics",
    problem:
      "A 31.1M loan portfolio needed monitoring of funded amounts, repayment behaviour and the profile of good versus bad loans.",
    approach:
      "Structured SQL queries for portfolio KPIs, built Excel validation checks, and designed Power BI and Tableau dashboards covering issue trends, term, grade, purpose and state-level breakdowns.",
    outcome:
      "Portfolio-level and segment-level views of repayment performance and credit-risk indicators for ongoing monitoring.",
  },
  {
    id: "course-recommendation",
    image: courseRecImg.url,
    imageAlt: "Online course recommendation system Streamlit app",
    title: "Online Course Recommendation System",
    category: "Data Science",
    description:
      "Recommendation system developed using 100,000+ learner-course interaction records across 43,242 users and 20 courses. Applied preprocessing, feature engineering, content-based filtering, collaborative filtering, TF-IDF, and cosine similarity.",
    tech: ["Python", "Pandas", "Scikit-learn", "Recommendation Systems", "Streamlit"],
    github: "https://github.com/HarshaVardhan2824/Online-Course-Recommendation-System",
    problem:
      "Learners on a course platform needed relevant next-course suggestions from sparse interaction data.",
    approach:
      "Preprocessed 100,000+ interactions across 43,242 users and 20 courses, engineered features, then combined content-based filtering using TF-IDF and cosine similarity with collaborative filtering, deployed through Streamlit.",
    outcome:
      "An interactive recommender that returns ranked course suggestions for a given learner or course profile.",
  },
  {
    id: "ipl",
    image: iplImg.url,
    imageAlt: "IPL match winner prediction Streamlit app",
    title: "IPL Match Winner Prediction",
    category: "Machine Learning",
    description:
      "Machine learning project predicting IPL match outcomes using feature engineering, team strength, venue impact, head-to-head statistics, and multiple ML algorithms.",
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "LightGBM", "Streamlit"],
    github: "https://github.com/HarshaVardhan2824/IPL-Match-Winner-Prediction",
    problem:
      "Match outcomes depend on many interacting factors — team form, venue, and historical head-to-head records.",
    approach:
      "Engineered features for team strength, venue impact and head-to-head history, then trained and compared logistic regression, tree ensembles, XGBoost and LightGBM models with a Streamlit prediction interface.",
    outcome:
      "A comparative modelling study with an interactive app for match-level win probability.",
  },
];

export const otherProjects = [
  {
    title: "Logistic Regression",
    description: "Implementation and evaluation study of logistic regression for classification.",
    github: "https://github.com/HarshaVardhan2824/Logistic-Regression",
  },
];

export const experience = [
  {
    company: "AI Variant",
    role: "Data Analyst Intern",
    period: "03 August 2025 – 05 May 2026",
    description:
      "Performed exploratory data analysis on sales and delivery datasets to identify trends, anomalies, and customer behavior patterns. Cleaned and transformed datasets using SQL and Excel, developed Power BI dashboards using Power Query and DAX, wrote SQL queries using joins and aggregations, and performed data validation and reporting.",
  },
  {
    company: "AI Variant",
    role: "Data Science Intern",
    period: "12 April 2026 – 13 July 2026",
    description:
      "Worked on an online course recommendation system using Python and Pandas. Analyzed 100,000+ learner-course interaction records across 43,242 users and 20 courses, performed preprocessing, EDA, feature engineering and statistical analysis, developed content-based and collaborative filtering approaches using TF-IDF and cosine similarity, and deployed the recommendation system using Streamlit.",
  },
];

export const research = {
  title: "Flexible Dual-Band Microstrip Patch Antenna for Cancer Hyperthermia",
  subtitle: "Published Conference Paper • ICCSCE 2025",
  description:
    "Designed and fabricated a flexible dual-band microstrip patch antenna using HFSS for biomedical hyperthermia applications.",
  paperUrl: "https://www.atlantis-press.com/proceedings/iccsce-25/126017381",
  doi: "10.2991/978-94-6463-858-5_238",
  doiUrl: "https://doi.org/10.2991/978-94-6463-858-5_238",
  details: [
    "Jeans substrate",
    "40 × 35 × 1.3 mm³",
    "Relative permittivity: 1.7",
    "Dual-band operation: 2.4 GHz and 7.9 GHz",
    "Modified slot-based patch design",
    "HFSS simulation",
    "SAR analysis",
    "Bending analysis",
    "Fabrication",
    "VNA evaluation",
  ],
  story: [
    "Design",
    "HFSS Simulation",
    "Performance Analysis",
    "Bending / SAR",
    "Fabrication",
    "VNA Validation",
  ],
  gallery: [
    { caption: "Antenna Design", src: antennaDesignImg.url },
    { caption: "S11 / Return Loss", src: antennaS11Img.url },
    { caption: "VSWR", src: antennaVswrImg.url },
    { caption: "3D Gain Pattern", src: antennaGainImg.url },
    { caption: "Bending Analysis", src: antennaBendingImg.url },
    { caption: "SAR Analysis", src: antennaSarImg.url },
    { caption: "Fabricated Antenna", src: antennaFinalImg.url },
  ],
  heroImage: antennaFinalImg.url,
  conference:
    "International Conference on Computer Science and Communication Engineering (ICCSCE 2025)",
  authors: "K. Harsha Vardhan Raju and co-authors",
};

export const education = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution:
      "Potti Sriramulu Chalavadi Mallikarjuna Rao College of Engineering & Technology",
    meta: "CGPA 8.67",
    period: "2021 – 2025",
    primary: true,
  },
  {
    degree: "Intermediate",
    institution: "Narayana Junior College",
    meta: "",
    period: "",
    primary: false,
  },
  {
    degree: "SSC",
    institution: "Sri Chaitanya School",
    meta: "",
    period: "",
    primary: false,
  },
];

export const certifications = [
  { title: "Data Analyst Certification Program", issuer: "ExcelR" },
  { title: "Certificate Program in Data Analytics", issuer: "NASSCOM" },
  { title: "Power BI for Data Analysts", issuer: "Microsoft Learn" },
  { title: "Python Intermediate Certification", issuer: "SoloLearn" },
  { title: "Cyber Security Training", issuer: "NPTEL" },
  { title: "Advanced Telecom Technologies Internship", issuer: "BSNL" },
];
