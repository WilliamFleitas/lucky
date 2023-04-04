export interface userType {
    username: string;
    password: string;
    id: string;
    privilege: string;
}

export interface ticketType {
    idRifa: string;
    idUser: string;
    ticketNumber: number;
    ticketState: string;
}

export interface rifaType {
    id: string;
    name: string;
    price: number;
    loot: number;
    dateRifa: string;
    
 }

export interface rifaDetailType {
   id: string;
   rifaNumber: number;
   rifaState: string;
}

