import throttle from "lodash.throttle";

const LOCAL_STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");

initForm();

formEl.addEventListener("submit", onFormSubmit);
formEl.addEventListener("input", throttle(onFormInput, 2000));

function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(formEl);
  formData.forEach((value, name) => console.log(value, name));
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function onFormInput(e) {
  let persistedFilters = localStorage.getItem(LOCAL_STORAGE_KEY);
  persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
  persistedFilters[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(persistedFilters));
  console.log(persistedFilters);
}

function initForm() {
  let persistedFilters = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
    console.log(persistedFilters);
}
