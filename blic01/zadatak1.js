function funkcija(polje){
    for (let polj of polje){
        console.log(Object.keys(polj))

       if (Object.keys(polj) < 2) console.log(Object.keys(polj))
        

    }
}

funkcija([{"1":"A"}, {"1":"C", "2":"A"}, {"2":"C"}])