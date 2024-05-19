function createUserProfiles(names, modifiedNames) {
    
    let id = 1;

    
    const userProfiles = names.map((name, index) => {
        const profile = {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: id++
        };
        return profile;
    });

    return userProfiles;
}
