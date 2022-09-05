export interface Users {
      id: number,
      firstName: string,
      lastName: string,
      maidenName: string,
      age: number,
      gender: string,
      email: string,
      phone: string,
      username: string,
      password: string,
      birthDate: Date,
      image: string,
      bloodGroup: string,
      height: number,
      weight: number,
      eyeColor: string,
      hair: {
        color: string,
        type: string
      },
      domain: URL,
      ip: string,
      address: Address[],
      macAddress: string,
      university: string,
      bank: Bank[],
      company: {
        address: Address[],
        department: string,
        name: string,
        title: string
      },
      ein: string,
      ssn: string,
      userAgent: string
}

export interface Bank {
    cardExpire: Date,
    cardNumber: number,
    cardType: string,
    currency: string,
    iban: string
}

export interface Address {
    address: string,
    city: string,
    coordinates: Coordinates[],
    postalCode: number,
    state: string
}

export interface Coordinates {
    lat: number,
    lng: number
}