const parcels = [
  {
    origin: "A",
    destination: "C",
    orderStatus: "waiting",
    assignee: null,
    id: 1,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "D",
    destination: "B",
    orderStatus: "assigned",
    assignee: "biker1",
    id: 2,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "B",
    destination: "A",
    orderStatus: "waiting",
    assignee: null,
    id: 3,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "E",
    orderStatus: "assigned",
    assignee: "biker2",
    id: 4,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "E",
    destination: "C",
    orderStatus: "delivered",
    assignee: "biker2",
    id: 5,
    pickupTime: "02/08/2019 02:15",
    deliveryTime: "02/09/2019 15:56"
  },
  {
    origin: "E",
    destination: "D",
    orderStatus: "waiting",
    assignee: null,
    id: 6,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "delivered",
    assignee: "biker4",
    id: 7,
    pickupTime: "02/07/2019 10:50",
    deliveryTime: "02/08/2019 12:55"
  },
  {
    origin: "D",
    destination: "C",
    orderStatus: "delivered",
    assignee: "biker4",
    id: 8,
    pickupTime: "02/08/2019 10:10",
    deliveryTime: "02/09/2019 16:57"
  },
  {
    origin: "A",
    destination: "C",
    orderStatus: "picked",
    assignee: "biker1",
    id: 9,
    pickupTime: "02/09/2019 12:12",
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "picked",
    assignee: "biker1",
    id: 10,
    pickupTime: "02/10/2019 13:45",
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "delivered",
    assignee: "biker3",
    id: 11,
    pickupTime: "02/05/2019 12:01",
    deliveryTime: "02/06/2019 17:00"
  },
  {
    origin: "D",
    destination: "A",
    orderStatus: "assigned",
    assignee: "biker4",
    id: 12,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "D",
    destination: "B",
    orderStatus: "picked",
    assignee: "biker3",
    id: 13,
    pickupTime: "02/10/2019 09:23",
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "waiting",
    assignee: null,
    id: 14,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "assigned",
    assignee: "biker1",
    id: 15,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "C",
    orderStatus: "waiting",
    assignee: null,
    id: 16,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "C",
    destination: "B",
    orderStatus: "assigned",
    assignee: "biker1",
    id: 17,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "assigned",
    assignee: "biker3",
    id: 18,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "D",
    destination: "C",
    orderStatus: "delivered",
    assignee: "biker3",
    id: 19,
    pickupTime: "02/09/2019 15:00",
    deliveryTime: "02/09/2019 22:55"
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "delivered",
    assignee: "biker3",
    id: 20,
    pickupTime: "02/05/2019 15:05",
    deliveryTime: "02/07/2019 10:31"
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "delivered",
    assignee: "biker2",
    id: 21,
    pickupTime: "02/08/2019 17:06",
    deliveryTime: "02/09/2019 16:57"
  },
  {
    origin: "B",
    destination: "C",
    orderStatus: "picked",
    assignee: "biker4",
    id: 22,
    pickupTime: "02/09/2019 22:55",
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "picked",
    assignee: "biker3",
    id: 23,
    pickupTime: "02/08/2019 17:01",
    deliveryTime: null
  },
  {
    origin: "B",
    destination: "A",
    orderStatus: "waiting",
    assignee: null,
    id: 24,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "B",
    destination: "D",
    orderStatus: "picked",
    assignee: "biker4",
    id: 25,
    pickupTime: "02/09/2019 16:38",
    deliveryTime: null
  },
  {
    origin: "C",
    destination: "D",
    orderStatus: "picked",
    assignee: "biker2",
    id: 26,
    pickupTime: "02/07/2019 13:30",
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "delivered",
    assignee: "biker4",
    id: 27,
    pickupTime: "02/06/2019 11:53",
    deliveryTime: "02/08/2019 12:55"
  },
  {
    origin: "A",
    destination: "D",
    orderStatus: "assigned",
    assignee: "biker1",
    id: 28,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "waiting",
    assignee: null,
    id: 29,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "D",
    destination: "C",
    orderStatus: "assigned",
    assignee: "biker3",
    id: 30,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "C",
    destination: "E",
    orderStatus: "delivered",
    assignee: "biker3",
    id: 31,
    pickupTime: "02/03/2019 9:59",
    deliveryTime: "02/05/2019 10:55"
  },
  {
    origin: "B",
    destination: "C",
    orderStatus: "assigned",
    assignee: "biker4",
    id: 32,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "E",
    destination: "B",
    orderStatus: "assigned",
    assignee: "biker3",
    id: 33,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "E",
    orderStatus: "waiting",
    assignee: null,
    id: 34,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "E",
    destination: "D",
    orderStatus: "picked",
    assignee: "biker3",
    id: 35,
    pickupTime: "02/08/2019 15:10",
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "C",
    orderStatus: "waiting",
    assignee: null,
    id: 36,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "D",
    destination: "B",
    orderStatus: "picked",
    assignee: "biker3",
    id: 37,
    pickupTime: "02/09/2019 11:26",
    deliveryTime: null
  },
  {
    origin: "B",
    destination: "D",
    orderStatus: "waiting",
    assignee: null,
    id: 38,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "delivered",
    assignee: "biker3",
    id: 39,
    pickupTime: "02/05/2019 00:55",
    deliveryTime: "02/06/2019 11:55"
  },
  {
    origin: "E",
    destination: "D",
    orderStatus: "assigned",
    assignee: "biker2",
    id: 40,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "assigned",
    assignee: "biker1",
    id: 41,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "B",
    destination: "A",
    orderStatus: "assigned",
    assignee: "biker2",
    id: 42,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "B",
    destination: "C",
    orderStatus: "picked",
    assignee: "biker4",
    id: 43,
    pickupTime: "02/05/2019 18:01",
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "D",
    orderStatus: "waiting",
    assignee: null,
    id: 44,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "picked",
    assignee: "biker4",
    id: 45,
    pickupTime: "02/07/2019 18:21",
    deliveryTime: null
  },
  {
    origin: "E",
    destination: "A",
    orderStatus: "waiting",
    assignee: null,
    id: 46,
    pickupTime: null,
    deliveryTime: null
  },
  {
    origin: "C",
    destination: "A",
    orderStatus: "delivered",
    assignee: "biker4",
    id: 47,
    pickupTime: "02/09/2019 09:00",
    deliveryTime: "02/09/2019 17:55"
  },
  {
    origin: "A",
    destination: "B",
    orderStatus: "delivered",
    assignee: "biker3",
    id: 48,
    pickupTime: "02/06/2019   16:55",
    deliveryTime: "02/07/2019 13:15"
  },
  {
    origin: "B",
    destination: "A",
    orderStatus: "delivered",
    assignee: "biker4",
    id: 49,
    pickupTime: "02/08/2019 10:01",
    deliveryTime: "02/10/2019 14:38"
  },
  {
    origin: "C",
    destination: "E",
    orderStatus: "delivered",
    assignee: "biker4",
    id: 50,
    pickupTime: "02/09/2019 15:45",
    deliveryTime: "02/10/2019 13:29"
  }
];

export default parcels;
