class Job {
    constructor(id,title,company,img,salaryStart,salaryEnd,level,type,site,location,size,date,jobDetail)
    {
        this.id = id
        this.title = title
        this.company = company
        this.img = img
        this.salaryStart = salaryStart
        this.salaryEnd = salaryEnd
        this.level = level
        this.type = type
        this.site = site
        this.location = location
        this.size = size
        this.date = date
        this.jobDetail = jobDetail
        this.applicants = []
    }
}

class JobDetail {
    constructor(about,req,desc) 
    {
        this.about = about
        this.req = req
        this.desc = desc
    }
}

let detail, detail2
export let JobList = []
detail = new JobDetail("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor urna vel ligula pellentesque, at tempor felis efficitur. Phasellus ultricies, justo vel consectetur hendrerit, nisl velit iaculis justo, non bibendum lectus lectus ac dui. Nullam id nulla massa. Nulla facilisi. Nunc vulputate euismod diam, vel lacinia nisl iaculis sed. Mauris semper, mauris sed aliquet hendrerit, nunc enim condimentum enim, at feugiat libero lacus non est. Quisque eu sollicitudin libero. Vivamus eget lectus tincidunt, pharetra eros a, auctor leo. Nullam pulvinar odio eget diam gravida, sit amet dapibus nulla consequat. Sed tristique cursus dui eget ultrices. Suspendisse potenti. Nulla facilisi.", 
    ["A Bachelor's Degree in any major",
        "Minimum 1 Year of Experience in the Data Science Field",
        "Able to analyze complex statistics",
        "Able to work efficiently in a tight schedule",
        "Good analytical and presentation skill"
    ], 
    [
        "Analyzing data/information to assess creditworthiness from the aspects of character, management and financial capabilities, collateral and business potential of the company to make the right credit decisions",
        "Evaluate confusion matrix",
        "With Business units or other related officials, can make direct visits to the location of the business",
        "Maximizing objectivity in every stage of analysis and evaluation of creditworthiness based on data"
    ])
detail2 = new JobDetail("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor urna vel ligula pellentesque, at tempor felis efficitur. Phasellus ultricies, justo vel consectetur hendrerit, nisl velit iaculis justo, non bibendum lectus lectus ac dui. Nullam id nulla massa. Nulla facilisi. Nunc vulputate euismod diam, vel lacinia nisl iaculis sed. Mauris semper, mauris sed aliquet hendrerit, nunc enim condimentum enim, at feugiat libero lacus non est. Quisque eu sollicitudin libero. Vivamus eget lectus tincidunt, pharetra eros a, auctor leo. Nullam pulvinar odio eget diam gravida, sit amet dapibus nulla consequat. Sed tristique cursus dui eget ultrices. Suspendisse potenti. Nulla facilisi.", 
    "We're looking for passionate team members who want to swing for the fences to accomplish our mission, are excited by a startup environment where the hardest problems are yet to be solved, and are eager to learn and collaborate together in our San Francisco office.",
    "In this role, you'll be responsible for building the infrastructure critical to train and deploy large models reliably. You will build and improve the internal tooling to enable teams at Adept to efficiently leverage our large scale compute for use-cases ranging from distributed training to ML pipelines to petabyte-scale data processing to production inference. Some of this will be evaluating and improving existing solutions, but more commonly it will mean building systems either from nothing or to replace systems that are no longer appropriate at our organizational and computational scale. You will also work to ensure that our infrastructure is resilient to hardware failures, primarily by building software to identify and remediate issues, but also by manually diagnosing issues as needed and working with our compute partners to resolve any issues."
)
JobList.push(new Job(1,"Data Scientist", "UMBRELLA CORPORATION", "assets/jobs/umbrellacorps.png",
    3000000, 7000000, "Internship", "Intern", "Hybrid", "Racoon City, USA", "4.5K", "30 Feb 2047", detail))
JobList.push(new Job(2,"Backend Developer", "Tokopedia", "assets/jobs/tokopedia.png",
    18000000, 22000000, "Mid-Senior", "Full-Time", "Onsite", "Jakarta, Indonesia", "18K", "5 Feb 2023", detail))
JobList.push(new Job(3,"Cloud Architect", "Microsoft", "assets/jobs/microsoft.jpeg",
    28000000, 30000000, "Director", "Full-Time", "Onsite", "Palo Alto, California, USA", "25K", "14 Apr 2023", detail2))
JobList.push(new Job(4,"Software Engineer", "Deloitte", "assets/jobs/deloitte.jpeg",
    9000000, 12000000, "Entry Level", "Full-Time", "Remote", "Central Jakarta, Indonesia", "4K", "20 Mar 2023", detail))
JobList.push(new Job(5,"Machine Learning Engineer", "Nawatech", "assets/jobs/nawatech.jpeg",
    3000000, 7000000, "Entry Level", "Full-time", "Onsite", "West Jakarta, Indonesia", "869", "11 Dec 2022", detail))
JobList.push(new Job(6,"Senior Data Engineer", "Turing", "assets/jobs/turing.jpeg",
    30000000, 35000000, "Executive", "Full-Time", "Remote", "London, UK", "1.5K", "26 Nov 2022", detail))
JobList.push(new Job(7, "Machine Learning Tutor", "Practicum", "assets/jobs/practicumIdn.jpeg", 
    5000000,7000000, "Entry Level", "Temporary", "Onsite", "South Jakarta, Indonesia", "240", "13 Jun 2023", detail2))
JobList.push(new Job(8, "Software Engineer", "Gojek", "assets/jobs/gojek.jpeg", 
    10000000,13000000, "Associate", "Full-Time", "Onsite", "Jakarta, Indonesia", "800", "24 May 2023", detail))
JobList.push(new Job(9, ".NET Developer", "Gecko", "assets/jobs/gecko.jpeg", 
    10000000,11000000, "Entry Level", "Full-Time", "Remote", "Dresen, Germany", "210", "30 Apr 2023", detail))
JobList.push(new Job(10, "Angular Developer", "Traveloka", "assets/jobs/traveloka.jpeg", 
    5000000,6500000, "Associate", "Full-Time", "Onsite", "North Jakarta, Indonesia", "1K", "21 Jun 2023", detail))
JobList.push(new Job(11, "Graphic Design Animation", "Future Creative Network", "assets/jobs/FCN.jpeg", 
    15000000,16000000, "Entry Level", "Full-Time", "Remote", "Newark, New Jersey, USA", "10", "20 Jan 2023", detail))
JobList.push(new Job(12, "Cybersecurity", "Thales", "assets/jobs/thales.jpeg", 
    20000000,22000000, "Director", "Full-Time", "Hybrid", "Lyon, France", "100", "19 Mar 2023", detail2))
JobList.push(new Job(13, "Computer Networks Specialist", "Rockwell Automation", "assets/jobs/rockwell.jpeg", 
    18000000,19500000, "Mid-Senior", "Full-Time", "Hybrid", "Toronto, Canada", "70", "27 May 2023", detail))
JobList.push(new Job(14, "Computer Graphics", "NVIDIA", "assets/jobs/nvidia.jpeg", 
    10000000,11500000, "Internship", "Intern", "Onsite", "San Jose, California, USA", "15K", "12 Jun 2023", detail2))
JobList.push(new Job(15, "FullStack Developer", "Gravel", "assets/jobs/gravel.jpeg", 
    15000000,16000000, "Mid-Senior", "Full-Time", "Onsite", "Osaka, Japan", "255", "14 Jun 2023", detail2))
JobList.push(new Job(16, "PHP / .NET Developer", "Synpulse8", "assets/jobs/synpulse.jpeg", 
    5000000,5500000, "Associate", "Part-Time", "Hybrid", "Los Angeles, California, USA", "1.2K", "7 Jun 2023", detail2))
JobList.push(new Job(17, "Senior Machine Learning", "OpenAI", "assets/jobs/openai.jpg", 
    40000000,45000000, "Executive", "Full-Time", "Onsite", "San Fransisco, California, USA", "16K", "14 Jun 2023", detail2))
JobList.push(new Job(18, "Junior Frontend Engineer", "Talent Kompass", "assets/jobs/talentkompass.jpeg", 
    10000000,1500000, "Entry-Level", "Full-Time", "Remote", "Osaka, Japan", "1K", "18 Feb 2023", detail))
JobList.push(new Job(19, "Senior Software Developer", "Lionbridge Technologies", "assets/jobs/lionbridge.jpeg", 
    12000000,12500000, "Director", "Full-Time", "Onsite", "Warsaw Poland", "2K", "1 Jun 2023", detail2))
JobList.push(new Job(20, "Java Developer", "SpotOn Connections", "assets/jobs/spoton.jpeg", 
    6000000,7000000, "Entry-Level", "Full-Time", "Hybrid", "Zurich, Switzerland", "787", "11 Jun 2023", detail))
JobList.push(new Job(21, "Data Analyst", "Arts AI", "assets/jobs/artsai.jpeg", 
    8000000,10000000, "Mid-Senior", "Full-Time", "Hybrid", "New York City, USA", "7k", "12 Jun 2023", detail))
JobList.push(new Job(22, "IOS Developer", "Apple.inc", "assets/jobs/apple.avif", 
    10000000,10500000, "Intern", "Part-Time", "Onsite", "Cupertino, California, USA", "20K", "13 Jun 2023", detail2))
JobList.push(new Job(23, "Senior Kotlin Developer", "Canonical", "assets/jobs/canonical.jpeg", 
    24000000,25000000, "Director", "Full-Time", "Hybrid", "Paris, France", "2K", "24 May 2023", detail))
JobList.push(new Job(24, "Data Scientist Intern", "OpenAI", "assets/jobs/openai.jpg", 
    6500000,70000000, "Intern", "Internship", "Onsite", "San Fransisco, California, USA", "16K", "15 Jun 2023", detail))