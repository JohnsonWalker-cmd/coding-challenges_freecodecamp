function findOrg(acronym) {
    const organizations = [
        "National Avocado Storage Authority" , "Cats Infiltration Agency" , "Fluffy Beanbag Inspectors", "Department Of Jelly" , "Wild Honey Organization" , "Eating Pancakes Administration"
    ];

    const acronyms = organizations.map(name => 
        name.split(' ').map(organ => organ[0]).join('').toUpperCase()
    );

    const index = acronyms.indexOf(acronym.toUpperCase());

    if (index !== -1 ) return  organizations[index] ;


    return null;
}

console.log(findOrg('NASA'));



