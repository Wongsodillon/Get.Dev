class Job {
    constructor(id,title,company,img,salaryStart,salaryEnd,level,type,site,location,size,date)
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
    }
}

export let JobList = []
JobList.push(new Job(1,"Data Scientist", "UMBRELLA CORPORATION", "assets/jobs/umbrellacorps.png",
                3000000, 7000000, "Internship", "Intern", "Hybrid", "Tangerang, Indonesia", "4.5K", "30 Feb 2047"))
JobList.push(new Job(2,"Backend Developer", "Tokopedia", "assets/jobs/tokopedia.png",
                18000000, 22000000, "Mid-Senior", "Full-Time", "Onsite", "Jakarta, Indonesia", "18K", "5 Feb 2023"))
JobList.push(new Job(3,"Cloud Architect", "Microsoft", "assets/jobs/microsoft.jpeg",
                28000000, 30000000, "Director", "Full-Time", "Onsite", "Palo Alto, California", "25K", "14 Apr 2023"))
JobList.push(new Job(4,"Software Engineer", "Deloitte", "assets/jobs/deloitte.jpeg",
                9000000, 12000000, "Entry Level", "Full-Time", "Remote", "Central Jakarta, Indonesia", "4K", "20 Mar 2023"))
JobList.push(new Job(5,"Machine Learning Engineer", "Nawatech", "assets/jobs/nawatech.jpeg",
                3000000, 7000000, "Entry Level", "Full-time", "Onsite", "West Jakarta, Indonesia", "869", "11 Dec 2022"))
JobList.push(new Job(6,"Senior Data Engineer", "Turing", "assets/jobs/turing.jpeg",
                30000000, 35000000, "Executive", "Full-Time", "Remote", "London, UK", "1.5K", "26 Nov 2022"))
