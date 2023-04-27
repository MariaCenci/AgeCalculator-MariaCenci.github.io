function calculating() {
    var date = new Date()
    var year = date.getFullYear()
    var yearB = document.getElementById('year')
    var res = document.getElementById('res')

    if (yearB.value.length == 0 || Number(yearB.value) > year) {
        window.alert('try again')
    } else {
        var age = year - Number(yearB.value)
        var genre = ''
        var sex = document.getElementsByName('sex')
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
      


        if (sex[0].checked) {
            genre = 'male'
            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'IMAGES/childM.jpg')
            } else if (age < 21) {
                img.setAttribute('src', 'IMAGES/youngM.jpg')
            } else if (age < 50) {
                img.setAttribute('src', 'IMAGES/adultM.jpg')

            } else {
                img.setAttribute('src', 'IMAGES/oldM.jpg')
            }


        } else if (sex[1].checked) {
            genre = 'female'
            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'IMAGES/childF.jpg')

            } else if (age < 21) {
                img.setAttribute('src', 'IMAGES/youngF.jpg')
            } else if (age < 50) {
                img.setAttribute('src', 'IMAGES/adultF.jpg')

            } else {
                img.setAttribute('src', 'IMAGES/oldF.jpg')
            }

        }
   
        res.innerHTML =`<p>This person is a ${genre} of ${age} old</p>`
        res.appendChild(img)

    }

}








