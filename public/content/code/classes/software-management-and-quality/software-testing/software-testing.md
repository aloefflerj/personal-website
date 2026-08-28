# Software Testing

Design a set of situations, called test cases, to find errors.

**Different tasks**:
- Technical reviews;
- Progression: starts at the component level and moves toward the computer system;
- Specificities: different testing techniques for different approaches;
- Tester: the developer or an independent test group;
- Debugging: different from testing, but should be associated with some testing strategy.

## Verification and validation
- Verification: tasks that ensure the correct implementation of a specification;
- Validation: tasks that ensure the software was built and can be traced according to the requirements.

## Types of software testing strategies

### 4 Types
- Unit testing;
- Integration testing;
- Validation testing;
- System testing.

![](https://mediacdns3.ulife.com.br/PAT/Upload/1777748/5216580/images/ad076bd111e97131af3e81b9dcd0a247.png)
![](https://mediacdns3.ulife.com.br/PAT/Upload/1777748/5216580/images/452efc53a4c216416cd2c42c6383e873.png)

### Unit testing
- Tests the smallest unit of software design;
- Focuses on the internal processing logic and data structures within the boundaries of a component;
- Tests the input and output of modules independently.

### Integration testing
- How components function when integrated;
- Builds the program structure of the project from components that have already been unit-tested;
- Incremental integration is when the program is built and tested in small increments, making errors easier to isolate and fix.

#### Incremental integration testing strategies
- Top-down integration testing: components are integrated moving downward through the control hierarchy, from the main module to its subordinates. When the lower-level modules aren't ready yet, "stubs" are used to return canned responses to the main module. Ex: *Checkout > Calculate shipping > Postal service API*;
- Bottom-up integration testing: starts with the system's lowest-level modules, the opposite of top-down;
- Regression testing: when we change something in the system, side effects can occur. Regression testing runs a battery of tests that previously worked correctly;
- Smoke testing: a quick check to verify the system's basic functions are working. Does the app open? Can the user log in? Does the balance appear on screen?

### Validation testing
- Begins when integration testing ends;
- Validation succeeds when the software works in a way that can reasonably be expected by the customer.

#### Alpha and beta testing
- Alpha: at the developer's "site," so the developer observes the user's behavior;
- Beta: in the users' own environment of use, without the developer present.

### System testing
Software is just one element of a computer system. As such, the software is incorporated with other system elements. These tests fall outside the scope of the software process and are not performed solely by software engineers.

Examples:
- Recovery testing;
- Security testing;
- Stress testing;
- Performance testing;
- Deployment testing.


## Testing strategy

### Black-box testing
Tests performed on the software's interface, with little concern for the system's internal logical structure. In other words, it evaluates the software **without access to the source code**.

### White-box testing
**Evaluates the internal structure and the source code.** The focus is on logic, execution paths, control structures, and code coverage.