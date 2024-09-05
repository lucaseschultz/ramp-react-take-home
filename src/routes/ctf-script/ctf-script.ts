// import puppeteer from "puppeteer";

// const getQuotes = async () => {
//   const browser = await puppeteer.launch({
//     // easier to debug because you'll see the browser in action
//     headless: false,
//     // load website page in full screen
//     defaultViewport: null,
//   });
//   const [page] = await browser.pages();

//   await page.goto(
//     "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge",
//     {
//       // wait for all DOM content to be accessable
//       waitUntil: "domcontentloaded",
//     }
//   );

//   const FLAG = await page.evaluate(() => {
//     // grabbing a NodeList of all qualifying code containers
//     const CODE_CONTAINERS = document.querySelectorAll("code");
//     let link = "";

//     // searching NodeList for DOM's containing link chars
//     CODE_CONTAINERS.forEach((CURR_CONTAINER) => {
//       if (
//         CURR_CONTAINER.hasAttribute("data-class") &&
//         CURR_CONTAINER.getAttribute("data-class").match(/^23/) &&
//         CURR_CONTAINER.hasChildNodes()
//       ) {
//         const CODE_CHILDREN = CURR_CONTAINER.children;
//         for (let i = 0; i < CODE_CHILDREN.length; i++) {
//           const CURR_CODE_CHILD = CODE_CHILDREN[i];
//           if (
//             CURR_CODE_CHILD.nodeName === "DIV" &&
//             CURR_CODE_CHILD.hasAttribute("data-tag") &&
//             CURR_CODE_CHILD.getAttribute("data-tag").match(/93$/) &&
//             CURR_CODE_CHILD.hasChildNodes()
//           ) {
//             const DIV_CHILDREN = CURR_CODE_CHILD.children;
//             for (let f = 0; f < DIV_CHILDREN.length; f++) {
//               const CURR_DIV_CHILD = DIV_CHILDREN[f];
//               if (
//                 CURR_DIV_CHILD.nodeName === "SPAN" &&
//                 CURR_DIV_CHILD.hasAttribute("data-id") &&
//                 CURR_DIV_CHILD.getAttribute("data-id").match(/21/) &&
//                 CURR_DIV_CHILD.hasChildNodes()
//               ) {
//                 const SPAN_CHILDREN = CURR_DIV_CHILD.children;
//                 for (let e = 0; e < SPAN_CHILDREN.length; e++) {
//                   const CURR_SPAN_CHILD = SPAN_CHILDREN[e];
//                   if (
//                     CURR_SPAN_CHILD.nodeName === "I" &&
//                     CURR_SPAN_CHILD.className.match(/^(.*\s)?char(\s.*)?$/) &&
//                     CURR_SPAN_CHILD.hasAttribute("value")
//                   ) {
//                     // adding valid link char to create/find CTF link
//                     link += CURR_SPAN_CHILD.getAttribute("value");
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     });
//     return link;
//     //  as of 8/22/24:
//     //  returns https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/746162
//     //  link contains the work 'tabloid'
//   });
//   console.log(FLAG);

//   await browser.close();
// };

// getQuotes();
