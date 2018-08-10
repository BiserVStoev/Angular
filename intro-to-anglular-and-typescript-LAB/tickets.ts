class Ticket {
    constructor(public destination: string, public price: number, public status: string) {
    }
};

function sortTickets(tickets: string[], sortingCriteria: string): Ticket[] {
    let ticketObjs: Ticket[] = tickets.map(t => {
        const currTicketData = t.split('|');
        const currTicket = new Ticket(currTicketData[0], Number(currTicketData[1]), currTicketData[2]);
        return currTicket;
    });
    ticketObjs = ticketObjs.sort((a, b) => {
        if (a[sortingCriteria] > b[sortingCriteria]) {
            return 1;
        } else if (a[sortingCriteria] < b[sortingCriteria]) {
            return -1;
        } else {
            return 0;
        }
    });
    return ticketObjs;
};

const sortedTickets = sortTickets(
    ['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'],
    'destination'
);
console.log(sortedTickets);

const sortedTickets2 = sortTickets(
    ['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 
    'status'
);
console.log(sortedTickets2);