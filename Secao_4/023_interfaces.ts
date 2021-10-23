interface User {
	email : string;
	firstName? : string;
	lastName? : string;
}

function profile1(user: User) : string {
	return `Welcome 1, ${user.firstName}  ${user.lastName}  `;
}

function profile2(user: User) : string {
	return `Welcome 2, ${user.email}`;
}

var realUser1 = {
	email: 'test@test.com',
    firstName :'Silva',
	lastName : 'Maria',
};

var realUser2 = {
	email: 'test@test.com'
};
console.log(profile1(realUser1));
console.log(profile2(realUser2));