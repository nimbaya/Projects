const people = new Map();
people.set("alice",
     {age:30,work:"programmer", obj:{project: 2}});
        people.forEach((value, key) => {
            console.log(`${key}`,  value.obj);
        });
