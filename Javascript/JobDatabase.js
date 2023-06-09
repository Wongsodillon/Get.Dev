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

let detail
export let JobList = []
detail = new JobDetail("About Data Scientist job", 
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
JobList.push(new Job(1,"Data Scientist", "UMBRELLA CORPORATION", "assets/jobs/umbrellacorps.png",
    3000000, 7000000, "Internship", "Intern", "Hybrid", "Racoon City, USA", "4.5K", "30 Feb 2047", detail))


JobList.push(new Job(2,"Backend Developer", "Tokopedia", "assets/jobs/tokopedia.png",
    18000000, 22000000, "Mid-Senior", "Full-Time", "Onsite", "Jakarta, Indonesia", "18K", "5 Feb 2023", detail))
JobList.push(new Job(3,"Cloud Architect", "Microsoft", "assets/jobs/microsoft.jpeg",
    28000000, 30000000, "Director", "Full-Time", "Onsite", "Palo Alto, California", "25K", "14 Apr 2023", detail))
JobList.push(new Job(4,"Software Engineer", "Deloitte", "assets/jobs/deloitte.jpeg",
    9000000, 12000000, "Entry Level", "Full-Time", "Remote", "Central Jakarta, Indonesia", "4K", "20 Mar 2023", detail))
JobList.push(new Job(5,"Machine Learning Engineer", "Nawatech", "assets/jobs/nawatech.jpeg",
    3000000, 7000000, "Entry Level", "Full-time", "Onsite", "West Jakarta, Indonesia", "869", "11 Dec 2022", detail))
JobList.push(new Job(6,"Senior Data Engineer", "Turing", "assets/jobs/turing.jpeg",
    30000000, 35000000, "Executive", "Full-Time", "Remote", "London, UK", "1.5K", "26 Nov 2022", detail))
            
