Front-end by Petar Jovic; back-end by Philip Cai (https://github.com/Gadnalf)

# Site Link and Details
Frontend deployment at: https://assignment-1-57-shopping-cart.herokuapp.com/

Proof of CI/CD function can be found as .pngs in the root of the repository.

Github CI workflow can be found under .github/workflows.

Tests can be run by running pytest in the repository root. Testing files can be found under /server/tests.

# Report

We decided to work on a web application as we both have a bit of experience with web apps, and neither of us had any experience working on a mobile app. Moreover, a mobile app makes less sense for this project as it is a simple calculator, not something which is worth downloading a whole mobile app over, but probably worth visiting a web page for. Even if an end-user is on a mobile device, React (our frontend “framework” of choice) can be used to make clean and responsive mobile web pages which work on virtually any modern device.

Ultimately we decided to use React as our front-end solution and Flask as our backend. 

One major reason for choosing React was that we both had a bit of experience working with it, thus making development easier. Another reason was its immense popularity and support with many different packages, which make development easier and more streamlined. While we did consider other options, none were quite as good of a fit. Angular, while also very popular, was much more comprehensive than we needed and, more importantly, neither of us had any experience with it, which is an issue considering the steep learning curve. We also considered using Vue but decided against it due to its lack of support in comparison to React, as well as the fact that Vue’s selling point, flexibility, would ultimately not be needed in this simple project. We decided against using Svelte for a similar reason, Svelte’s main selling point is its performance, which is not a huge factor in this simple application. Moreover, Svelte has much less popular support than React. Finally we briefly looked at Ember, but decided against it because, like Angular, it was a comprehensive framework with little flexibility and many concepts with which we were unfamiliar with, not to mention it’s unpopularity. So, we decided to use React due to our familiarity with the technology, its extensive online support and many community packages.

Following similar reasoning on the backend, with our shared experience in python easing development and the availability of libraries, the backend would be simple to build and test. While we considered more comprehensive and robust frameworks, for the lightweight function of the backend that we had envisioned, Flask ended up being a perfect fit. With the bulkiness of certain frameworks inhibiting rapid development and unfamiliarity hindering the lighter alternatives, while they would have offered many respective benefits, for the given scope and required functions Flask allows us to produce our product quickly and with much less hassle.
