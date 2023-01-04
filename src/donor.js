class Donor {

  static all = []

  static donorContainer = document.getElementById("donor-container")
  static donorFormContainer = document.getElementById("donor-form-container")
  
  
  constructor({id, first_name, last_name, email, phone_number}) 
  {
    this.id = id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.phone_number = phone_number

    this.element = document.createElement('li')
    this.element.dataset.id = this.id
    this.element.id = `donor-${this.id}`

    Donor.all.push(this)
  }

  donorHTML() {
    this.element.innerHTML  = `
    <div> 
    <p>First Name: ${this.first_name}</p>
    <p> Last Name: ${this.last_name}</p>
    <p> Email: ${this.email}</p>
    <p> Phone Number: ${this.phone_number}</p>
    </div> 
    
    <br>
    <br>
    `
   return this.element
  }

  slapOnDom() {
    Donor.donorContainer.appendChild(this.donorHTML())
   }


}


