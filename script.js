console.log('Add validation!');

let form = document.querySelector('#parking-form')
let formIsValid

form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    validateName ()
    validateYear ()
    validateCarMake ()
    validateCarModel ()
    validateDateParking ()
    validateNumDays ()
    validateCardNum ()
    validateCvv ()
    validateExpDate ()

    // removeErrorMessage()
    removeValidMessage()
    // showValidMessage()
})

formIsValid = true

function markFormAsInvalid () {
    formIsValid = false
}

// function removeErrorMessage () {
//     let errorDiv = document.querySelector('#error-msg')
//     if (errorDiv) {
//       errorDiv.innerHTML = ''
//         console.log('error message removed duh') 

//     }
//   }
  
function removeValidMessage () {
    let validMsg = document.querySelector('#valid-message')
    if (validMsg) {
      validMsg.remove()
    }
  }

function validateName () {
    const nameInput = document.querySelector('#name')
    const name = nameInput.value
    const parentEl = nameInput.parentElement
    if (name) {
      console.log('Name input is valid') 
      parentEl.classList.remove('input-invalid')
      parentEl.classList.add('input-valid')
      let invalidName = document.querySelector('#invalid-name')
      if (invalidName) {
          invalidName.remove()
      }
    } else {
      console.log('Name input is invalid')
      parentEl.classList.remove('input-valid')
      parentEl.classList.add('input-invalid')
      markFormAsInvalid()
      let invalidName = document.querySelector('#invalid-name')
      if (!invalidName) {
        const invalidMsgEl =  document.createElement('div')
        invalidMsgEl.id = 'invalid-name'
        const invalidMsgText = document.createTextNode('is invalid!')
        invalidMsgEl.appendChild(invalidMsgText)
        parentEl.appendChild(invalidMsgEl)
      }
      
    }
  }

function validateYear () {
    const yearInput = document.querySelector('#car-year')
    const year = yearInput.value
    const parentEl = yearInput.parentElement
    if (year && !isNaN(year)) {
      console.log('Year input is valid') 
      parentEl.classList.remove('input-invalid')
      parentEl.classList.add('input-valid')
      let invalidYear = document.querySelector('#invalid-year')
      if (invalidYear) {
          invalidYear.remove()
      }
    } else {
      console.log('Year input is invalid')
      parentEl.classList.remove('input-valid')
      parentEl.classList.add('input-invalid')
      markFormAsInvalid()
      let invalidYear = document.querySelector('#invalid-year')
      if (!invalidYame) {
        const invalidMsgEl =  document.createElement('div')
        invalidMsgEl.id = 'invalid-year'
        const invalidMsgText = document.createTextNode('is invalid!')
        invalidMsgEl.appendChild(invalidMsgText)
        parentEl.appendChild(invalidMsgEl)
      }
    }
  }

function validateCarMake () {
    const carMakeInput = document.querySelector('#car-make')
    const carMake = carMakeInput.value
    const parentEl = carMakeInput.parentElement
    if (carMake) {
      console.log('Car Make input is valid') 
      parentEl.classList.remove('input-invalid')
      parentEl.classList.add('input-valid')
      let invalidCarMake = document.querySelector('#invalid-car-make')
      if (invalidCarMake) {
          invalidCarMake.remove()
      }
    } else {
      console.log('Car Make input is invalid')
      parentEl.classList.remove('input-valid')
      parentEl.classList.add('input-invalid')
      markFormAsInvalid()
      let invalidCarMake = document.querySelector('#invalid-car-make')
      if (!invalidCarMake) {
        const invalidMsgEl =  document.createElement('div')
        invalidMsgEl.id = 'invalid-car-make'
        const invalidMsgText = document.createTextNode('is invalid!')
        invalidMsgEl.appendChild(invalidMsgText)
        parentEl.appendChild(invalidMsgEl)
      }
      
    }
  }

function validateCarModel () {
    const carModelInput = document.querySelector('#car-model')
    const carModel = carModelInput.value
    const parentEl = carModelInput.parentElement
    if (carModel) {
      console.log('Car Model input is valid') 
      parentEl.classList.remove('input-invalid')
      parentEl.classList.add('input-valid')
      let invalidCarModel = document.querySelector('#invalid-car-model')
      if (invalidCarModel) {
          invalidCarModel.remove()
      }
    } else {
      console.log('Car Model input is invalid')
      parentEl.classList.remove('input-valid')
      parentEl.classList.add('input-invalid')
      markFormAsInvalid()
      let invalidCarModel = document.querySelector('#invalid-car-model')
      if (!invalidCarModel) {
        const invalidMsgEl =  document.createElement('div')
        invalidMsgEl.id = 'invalid-car-mode;'
        const invalidMsgText = document.createTextNode('is invalid!')
        invalidMsgEl.appendChild(invalidMsgText)
        parentEl.appendChild(invalidMsgEl)
      }
      
    }
  }

  function validateDateParking () {
    const dateParkingInput = document.querySelector('#start-date')
    const dateParking = dateParkingInput.value
    const parentEl = dateParkingInput.parentElement
    if (dateParking) {
      console.log('Parking Date input is valid') 
      parentEl.classList.remove('input-invalid')
      parentEl.classList.add('input-valid')
      let invalidDateParking = document.querySelector('#invalid-start-date')
      if (invalidDateParking) {
          invalidDateParking.remove()
      }
    } else {
      console.log('Parking Date input is invalid')
      parentEl.classList.remove('input-valid')
      parentEl.classList.add('input-invalid')
      markFormAsInvalid()
      let invalidDateParking = document.querySelector('#invalid-start-date')
      if (!invalidDateParking) {
        const invalidMsgEl =  document.createElement('div')
        invalidMsgEl.id = 'invalid-start-date'
        const invalidMsgText = document.createTextNode('is invalid!')
        invalidMsgEl.appendChild(invalidMsgText)
        parentEl.appendChild(invalidMsgEl)
      }
      
    }
  }

  function validateNumDays () {
    const numDaysInput = document.querySelector('#days')
    const numDays = numDaysInput.value
    const parentEl = numDaysInput.parentElement
    const numDaysIsNumber = !isNaN(numDays)
    if (numDays && numDaysIsNumber && (Number(numDays)>=1)&& (Number(numDays)<=30)) {
      console.log('Number of days input is valid') 
      parentEl.classList.remove('input-invalid')
      parentEl.classList.add('input-valid')
      let invalidNumDays = document.querySelector('#invalid-days')
      if (invalidNumDays) {
          invalidNumDays.remove()
      }
    } else {
      console.log('Number of days input is invalid')
      parentEl.classList.remove('input-valid')
      parentEl.classList.add('input-invalid')
      markFormAsInvalid()
      let invalidNumDays = document.querySelector('#invalid-days')
      if (!invalidNumDays) {
        const invalidMsgEl =  document.createElement('div')
        invalidMsgEl.id = 'invalid-days'
        const invalidMsgText = document.createTextNode('is invalid!')
        invalidMsgEl.appendChild(invalidMsgText)
        parentEl.appendChild(invalidMsgEl)
      }
      
    }
  }

function validateCardNum () {
    const cardNumInput = document.querySelector('#credit-card')
    const cardNum = cardNumInput.value
    const parentEl = cardNumInput.parentElement
    if (cardNum) {
      console.log('Card Number input is valid') 
      parentEl.classList.remove('input-invalid')
      parentEl.classList.add('input-valid')
      let invalidCardNum = document.querySelector('#invalid-credit-card')
      if (invalidCardNum) {
          invalidCardNum.remove()
      }
    } else {
      console.log('Card Number input is invalid')
      parentEl.classList.remove('input-valid')
      parentEl.classList.add('input-invalid')
      markFormAsInvalid()
      let invalidCardNum = document.querySelector('#invalid-credit-card')
      if (!invalidCardNum) {
        const invalidMsgEl =  document.createElement('div')
        invalidMsgEl.id = 'invalid-credit-card'
        const invalidMsgText = document.createTextNode('is invalid!')
        invalidMsgEl.appendChild(invalidMsgText)
        parentEl.appendChild(invalidMsgEl)
      }
      
    }
  }

  function validateCvv () {
    const cvvInput = document.querySelector('#cvv')
    const cvv = cvvInput.value
    const parentEl = cvvInput.parentElement
    if (cvv) {
      console.log('CVV input is valid') 
      parentEl.classList.remove('input-invalid')
      parentEl.classList.add('input-valid')
      let invalidCvv = document.querySelector('#invalid-cvv')
      if (invalidCvv) {
          invalidCvv.remove()
      }
    } else {
      console.log('CVV input is invalid')
      parentEl.classList.remove('input-valid')
      parentEl.classList.add('input-invalid')
      markFormAsInvalid()
      let invalidCvv = document.querySelector('#invalid-cvv')
      if (!invalidCvv) {
        const invalidMsgEl =  document.createElement('div')
        invalidMsgEl.id = 'invalid-cvv'
        const invalidMsgText = document.createTextNode('is invalid!')
        invalidMsgEl.appendChild(invalidMsgText)
        parentEl.appendChild(invalidMsgEl)
      }
      
    }
  }

  function validateExpDate () {
    const expDateInput = document.querySelector('#expiration')
    const expDate = expDateInput.value
    const parentEl = expDateInput.parentElement
    if (expDate) {
      console.log('Expiration date input is valid') 
      parentEl.classList.remove('input-invalid')
      parentEl.classList.add('input-valid')
      let invalidExpDate = document.querySelector('#invalid-expiration')
      if (invalidExpDate) {
          invalidExpDate.remove()
      }
    } else {
      console.log('Expiration date input is invalid')
      parentEl.classList.remove('input-valid')
      parentEl.classList.add('input-invalid')
      markFormAsInvalid()
      let invalidExpDate = document.querySelector('#invalid-expiration')
      if (!invalidExpDate) {
        const invalidMsgEl =  document.createElement('div')
        invalidMsgEl.id = 'invalid-expiration'
        const invalidMsgText = document.createTextNode('is invalid!')
        invalidMsgEl.appendChild(invalidMsgText)
        parentEl.appendChild(invalidMsgEl)
      }
      
    }
  }