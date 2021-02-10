export const event_data = [
    {
       name: "Skribblio",
       Time: "March 12th",
       Zoom: "zoom.us"
    },
    {
        name: "Movie",
        Time: "March 12th",
        Zoom: "zoom.us"
     },
     {
        name: "Art",
        Time: "March 12th",
        Zoom: "zoom.us"
     }
]

// course_data.filter((course) => {
//     return course.type == "Science"
// })

event_data.filter((event) => {
    if(this.state.search.length>0) {
        return event.name.includes(this.state.search)
    }
    return true
})

/* [“word second”, “one two”]{{first: “word”, second: “second”}Arr.map((string) => ({ first: string.split(‘ ‘)[0], second: string.split(‘ ‘)[1]})) */

