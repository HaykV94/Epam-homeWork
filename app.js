import { faker } from '@faker-js/faker';
import _ from "lodash";


const fakeData = [];

function fakeDataGenerator(fakeData, n){
    if (n === 0){
        return fakeData
    }else{
        const fakeUser = {
            name: faker.person.firstName(),
            email: faker.internet.email(),
            phone: faker.phone.number()
        }

        fakeData.push(fakeUser)
        return fakeDataGenerator(fakeData, n-1)
    }
}
console.log(fakeDataGenerator(fakeData, 10))

const sortedData = _.sortBy(fakeData, "name");
console.log(sortedData);