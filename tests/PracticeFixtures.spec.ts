
import {test} from '../fixtures/customFixtures';




  test('Fixtures test 1', async ({fixtureData1, workerFixture1}) => {

    console.log('Test 1 started');
    console.log(fixtureData1);
    console.log(workerFixture1);
  });
 

    test('Fixtures test 2', async ({page, fixtureData1}) => {
      console.log('Test 2 started');
      console.log(fixtureData1);

  });
    


  