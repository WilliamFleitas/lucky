
const { TicketDetail, Rifa, User} = require("../../database");

// export const getAllInvoices = async ( ) => {
//   try {
//     const result = await Invoice.findAll({include: Product});
//     if(result){
//       return result;
//     }
//     else{
//       return "no se encontraron facturas";
//     }
    
//   } catch (error: any) {
//     console.log(error)
//             throw new Error(error);
//   }
// };


export const createTicket = async(body: any, tokenId: any) => {
        try {
          console.log("body", body); 
          
          const userData = await User.findByPk(tokenId, {
              attributes: {
                  exclude: ['password']
              }
          });
          if(!userData){
            throw new Error("No se encontro el usuario")
          }
          console.log("userdata", userData);
          const rifaData = await Rifa.findByPk(body.idRifa);
          if(!rifaData){
            throw new Error("No se encontro esa rifa")
          }
          const findTicket = await TicketDetail.findOne({
            where: { ticketNumber: body.ticketNumber, RifaId: body.idRifa},
          });

          if(findTicket){
            throw new Error("Ese numero ya esta en uso");
          }
          console.log("rifadata", rifaData);
          const ticket = await TicketDetail.create({
            ticketNumber: body.ticketNumber,
            ticketState: body.ticketState,
            UserId: tokenId,
            RifaId: body.idRifa
          });
          console.log("tuser", User);
        //   await User.addTicketDetail(ticket);
          await ticket.setRifa(rifaData);

          return ticket.update();
        } catch (error: any) {
          console.log(error)
            throw new Error(error);
        }


};

