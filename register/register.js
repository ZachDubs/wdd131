let participantCount = 1;

document.addEventListener('DOMContentLoaded', () => {
    participantCount = 1;

    document.getElementById("add").addEventListener('click', addParticipant);
    document.querySelector('form').addEventListener('submit', submitForm);
});


function participantTemplate(count) {

    return `
    <section class="participant${count}">
    <p>Participant ${count}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`;
}

function addParticipant() {
    participantCount++;

    const newParticipant = participantTemplate(participantCount);

    document
    .getElementById('add')
    .insertAdjacentHTML('beforebegin', newParticipant);
}

function submitForm(event) {
    event.preventDefault();

    const adultName = document.getElementById("adult_name").value.trim();
    const numberOfParticipants = participantCount;
    const total = totalFees();

    const info = {
    adultName: adultName,
    numberOfParticipants: numberOfParticipants,
    total: total
  };

    showSuccessMessage({adultName, numberOfParticipants, total});
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];

    return feeElements.reduce((total, el) => {
        return total + parseFloat(el.value || 0);
    }, 0);
}

function successTemplate(info) {
        return `
        <h2>Thank you ${info.adultName} for registering.</h2>
        <p>You have registered ${info.numberOfParticipants} participants and owe $${info.total} in fees.</p>`;
}

function showSuccessMessage(info) {
    document.querySelector("form").style.display = "none";

    const summary = document.getElementById("summary");
    
    summary.innerHTML = successTemplate(info);
    summary.style.display = "block";
}