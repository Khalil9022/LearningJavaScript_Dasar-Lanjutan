function arrayFilter(){
    let people = [
        {
            name : "Andi",
            gender : "Male"
        }, 
        {
            name : "Siti",
            gender : "Female"
        },
        {
            name : "cindy",
            gender : "Female"
        }
    ]

    let female = people.filter(people => {
        return people.gender === "Male"
    })

    console.log(female);
}

arrayFilter()