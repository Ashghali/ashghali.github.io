const { useState } = React;
const { createRoot } = ReactDOM;
const { motion } = Motion;

const root = createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));

function App() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "bg-white grid place-items-center min-h-screen w-full pb-40" }, /*#__PURE__*/
    React.createElement("div", { className: "text-xl " }, /*#__PURE__*/
    React.createElement("div", { className: "text-3xl justify-self-start" }, "\u0622\u0634\u063A\u0627\u0644\u06CC \u0686\u06CC \u0645\u06CC \u0628\u0631\u062F\u061F"), /*#__PURE__*/
    React.createElement("div", { className: "rounded-lg mt-4" }, "\u062C\u0645\u0639 \u0622\u0648\u0631\u06CC \u0633\u0631\u06CC\u0639 \u062A\u0642\u0631\u06CC\u0628\u0627\u064B \u0647\u0631"), /*#__PURE__*/
    React.createElement("div", { className: "rounded-lg mt-4" }, " \u0686\u06CC\u0632\u06CC \u06A9\u0647 \u062E\u0637\u0631\u0646\u0627\u06A9 \u0646\u0628\u0627\u0634\u062F. "), /*#__PURE__*/
    React.createElement("div", { className: "rounded-lg mt-4" }, "\u0645\u0648\u0627\u0631\u062F \u0631\u0627\u06CC\u062C\u06CC \u06A9\u0647 \u0645\u06CC \u0628\u0631\u06CC\u0645:")), /*#__PURE__*/

    React.createElement("div", { className: "" }, /*#__PURE__*/
    React.createElement("div", { className: "text-l text-black m-8" }, "\u0627\u0646\u0648\u0627\u0639 \u0622\u0634\u063A\u0627\u0644\u0647\u0627\u06CC \u062E\u0627\u0646\u06AF\u06CC"), /*#__PURE__*/
    React.createElement("div", { className: "text-l text-black m-8" }, "\u062A\u062C\u0647\u06CC\u0632\u0627\u062A \u0648\u0631\u0632\u0634\u06CC"), /*#__PURE__*/
    React.createElement("div", { className: "text-l text-black m-8" }, "\u0645\u0628\u0644\u0645\u0627\u0646"), /*#__PURE__*/
    React.createElement("div", { className: "text-l text-black m-8" }, "\u062A\u0644\u0648\u06CC\u0632\u06CC\u0648\u0646"), /*#__PURE__*/
    React.createElement("div", { className: "text-l text-black m-8" }, "\u06CC\u062E\u0686\u0627\u0644"), /*#__PURE__*/
    React.createElement("div", { className: "text-l text-black m-8" }, "\u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631")), /*#__PURE__*/

    React.createElement("div", { className: "text-xl m-8" }, "\u0628\u0631\u0627\u06CC \u0646\u0627\u067E\u062F\u06CC\u062F \u0634\u062F\u0646 \u0622\u0634\u063A\u0627\u0644 \u0647\u0627 \u0622\u0645\u0627\u062F\u0647 \u0627\u06CC\u062F\u061F"), /*#__PURE__*/

    React.createElement(Form, null), /*#__PURE__*/

    React.createElement("div", { className: "text-l m-8" }, "\u0622\u0634\u063A\u0627\u0644\u06CC \u0645\u062D\u062F\u0648\u062F\u0647\u0654 \u062A\u0647\u0631\u0627\u0646 \u0648 \u062A\u0628\u0631\u06CC\u0632")));


}

function Form() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [cell, setCell] = useState("");
  const [fehrest, setFehrest] = useState("");
  const [address, setAddress] = useState("");
  const [size, setSize] = useState("");

  async function sendEmail() {
    console.log(cell);
    const response = await fetch(
    "https://faas-sgp1-18bc02ac.doserverless.co/api/v1/web/fn-06fa1b86-de54-43ca-8531-fb3d4329867d/default/update",
    {
      method: "POST",
      body: JSON.stringify({
        cell: cell,
        fehrest: fehrest,
        Tsize: size,
        address: address }),

      headers: {
        "Content-Type": "application/json" } });



    const result = await response.text();
    if (result === "Hello Stranger!" && step == 5 && cell) {
      setSuccess("سفارش شما با موفقیت دریافت شد.");
    }
    console.log(success);
  }

  function nextStep() {
    if (step < 5) setStep(lastStep => lastStep + 1);
    if (step == 5) {
      if (fehrest === "")
      setError("بردنی ها را فهرست کنید تا ما در خدمت باشیم.");
      if (cell === "") setError("لطفاً حتما شماره تلفن وارد بفرمایید.");
    }
    if (cell) sendEmail();
  }

  function darDastres() {
    setSize("بزرگ");
  }
  function darDastresNist() {
    setSize("کوچک");
  }

  function back() {
    if (step > 1) setStep(lastStep => lastStep - 1);
  }

  function handleChange(e) {
    var value = e.target.value;
    setCell(value);
    setError("");
  }
  function handle3Change(e) {
    var value = e.target.value;
    setFehrest(value);
    setError("");
  }
  function handleAddressChange(e) {
    var value = e.target.value;
    setAddress(value);
  }
  return /*#__PURE__*/(
    React.createElement("div", { className: "bg-white border p-6 rounded-2xl w-max" }, /*#__PURE__*/
    React.createElement("div", { className: "flex gap-8" }, /*#__PURE__*/
    React.createElement(Step, { step: step, stepOrder: 1, setStep: setStep }), /*#__PURE__*/
    React.createElement(Step, { step: step, stepOrder: 2, setStep: setStep }), /*#__PURE__*/
    React.createElement(Step, { step: step, stepOrder: 3, setStep: setStep }), /*#__PURE__*/
    React.createElement(Step, { step: step, stepOrder: 4, setStep: setStep })),

    step === 1 && /*#__PURE__*/
    React.createElement("div", { className: "text-xl" }, /*#__PURE__*/
    React.createElement("div", { className: "w-full rounded-lg mt-8" }, "\u0644\u0637\u0641\u0627\u064B \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0628\u0641\u0631\u0645\u0627\u06CC\u06CC\u062F."), /*#__PURE__*/


    React.createElement("input", {
      type: "tel",
      onChange: handleChange,
      dir: "ltr",
      className: "border w-full rounded-lg mt-8",
      placeHolder: cell })),



    step === 2 && /*#__PURE__*/
    React.createElement("div", { className: "text-xl" }, /*#__PURE__*/
    React.createElement("div", { className: " w-full rounded-lg mt-8" }, "\u0686\u0642\u062F\u0631 \u0622\u0634\u063A\u0627\u0644 \u062F\u0627\u0631\u06CC\u062F\u061F"), /*#__PURE__*/
    React.createElement("div", { className: "flex justify-between mb-\u06F8 m-8" },
    size === "کوچک" && /*#__PURE__*/
    React.createElement("button", {
      onClick: darDastresNist,
      className: "border bg-black text-white py-2 px-8 rounded-full" }, "\u06A9\u0648\u0686\u06A9"),




    size === "کوچک" || /*#__PURE__*/
    React.createElement("button", {
      onClick: darDastresNist,
      className: "border bg-white text-black py-2 px-8 rounded-full" }, "\u06A9\u0648\u0686\u06A9"),




    size === "بزرگ" && /*#__PURE__*/
    React.createElement("button", {
      onClick: darDastres,
      className: "border bg-black text-white py-2 px-8 rounded-full" }, "\u0628\u0632\u0631\u06AF"),




    size === "بزرگ" || /*#__PURE__*/
    React.createElement("button", {
      onClick: darDastres,
      className: "border bg-white text-black py-2 px-8 rounded-full" }, "\u0628\u0632\u0631\u06AF")),





    size === "کوچک" && /*#__PURE__*/
    React.createElement("div", { id: "dastres", className: "text-sm" }, "\u0622\u0634\u063A\u0627\u0644\u06CC \u062F\u0631 \u062F\u0633\u062A\u0631\u0633 \u0646\u0645\u06CC \u0628\u0627\u0634\u062F.")),





    step === 3 && /*#__PURE__*/
    React.createElement("div", { className: "text-xl" }, /*#__PURE__*/
    React.createElement("div", { className: "w-full rounded-lg mt-8" }, "\u0647\u0631\u0686\u0647 \u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u0628\u0628\u0631\u06CC\u0645 \u0641\u0647\u0631\u0633\u062A \u06A9\u0646\u06CC\u062F:"), /*#__PURE__*/


    React.createElement("textarea", {
      autoFocus: true,
      onChange: handle3Change,
      className: "border w-full rounded-lg mt-8",
      placeHolder: fehrest,
      wrap: "soft" })),



    step === 4 && /*#__PURE__*/
    React.createElement("div", { className: "text-xl" }, /*#__PURE__*/
    React.createElement("div", { className: "w-full rounded-lg mt-8" }, "\u0622\u062F\u0631\u0633 \u06A9\u0627\u0645\u0644 \u0628\u0631\u0627\u06CC \u0648\u0627\u0646\u062A:"), /*#__PURE__*/
    React.createElement("textarea", {
      autoFocus: true,
      onChange: handleAddressChange,
      className: "border w-full rounded-lg mt-8",
      placeHolder: address,
      wrap: "soft" })),



    step === 5 && error === "" && success === "" && /*#__PURE__*/
    React.createElement("div", { className: "text-xl" }, /*#__PURE__*/
    React.createElement("div", { className: "rounded-lg mt-4" }, "\u0644\u0637\u0641\u0627\u064B \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06CC\u062F \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u06A9\u0647 \u062F\u0631"), /*#__PURE__*/


    React.createElement("div", { className: "rounded-lg mt-4" }, "\u0645\u0631\u062D\u0644\u0647 \u06CC\u06A9 \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F \u062F\u0631\u0633\u062A \u0627\u0633\u062A"), /*#__PURE__*/
    React.createElement("div", { className: "rounded-lg mt-4" }, "\u0686\u0631\u0627\u06A9\u0647 \u0645\u0627 \u0628\u0647 \u0634\u0645\u0627 \u0632\u0646\u06AF \u0645\u06CC \u0632\u0646\u06CC\u0645.")),


    step === 5 && error && /*#__PURE__*/
    React.createElement("div", { className: "text-xl" }, /*#__PURE__*/
    React.createElement("div", { className: "rounded-lg mt-16 mb-16" }, error)),


    step === 5 && error === "" && success && /*#__PURE__*/
    React.createElement("div", { className: "text-xl" }, /*#__PURE__*/
    React.createElement("div", { className: "rounded-lg mt-16 mb-16" }, success)), /*#__PURE__*/



    React.createElement("div", { className: "flex justify-between mt-8" }, /*#__PURE__*/
    React.createElement("button", { className: "text-gray-700", onClick: back },
    step === 1 ? "" : "قبلی"), /*#__PURE__*/

    React.createElement("button", {
      onClick: nextStep,
      className: "bg-black text-white py-2 px-8 rounded-full" },

    step === 5 ? "سفارش" : "بعدی"))));




}

function Step({ step, stepOrder, setStep }) {
  const status =
  step === stepOrder ? "active" : step > stepOrder ? "complete" : "inactive";

  return /*#__PURE__*/(
    React.createElement(motion.button, {
      onClick: () => setStep(stepOrder),
      initial: false,
      animate: status,
      variants: {
        inactive: {
          backgroundColor: "#fff" },

        active: {
          backgroundColor: "#fff",
          borderColor: "#333",
          color: "#333" },

        complete: {
          backgroundColor: "#111" } },


      transition: { duration: 0.5 },
      className: "w-12 h-12 rounded-full border fill-white text-gray-500 grid place-items-center" },

    status === "complete" ? /*#__PURE__*/
    React.createElement(CheckIcon, null) : /*#__PURE__*/

    React.createElement("span", null, toFarsiNumber(stepOrder))));



}
function toFarsiNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n.
  toString().
  split("").
  map(x => farsiDigits[x]).
  join("");
}

function CheckIcon() {
  return /*#__PURE__*/(
    React.createElement("svg", {
      className: "text-white h-6 w-6",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 96 960 960",
      stroke: "currentColor",
      strokeWidth: 80,
      strokeHeight: 80 }, /*#__PURE__*/

    React.createElement(motion.path, {
      initial: { pathLength: 0 },
      animate: { pathLength: 1 },
      transition: {
        delay: 0.3,
        type: "tween",
        ease: "easeOut",
        duration: 0.3 },

      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z",
      d: "M382 816 154 588l57-57 171 171 367-367 57 57-424 424Z" })));



}