class DonorService {

    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getDonors(){
      fetch(`${this.endpoint}/donors`)
      .then(resp => resp.json())
      .then(donors => {
        for (const donor of donors) {
        const d = new Donor(donor) 
        d.slapOnDom() 
       }
      })
    }


}

