const explorer = {
    id:"1",
    name: "root",
    isFolder: true,
    items: [
      {
        id:"2",
        name: "Documents",
        isFolder: true,
        items: [
          {
            id:"3",
            name: "MERN",
            isFolder: true,
            items: [
              {
                id:"4",
                name: "File Explorer",
                isFolder: false,
                items: []
              },
              {
                id:"5",
                name: "Recepie App",
                isFolder: false,
                items: []
              }
            ]
          },
          {
            id:"6",
            name: "JavaScript Basics",
            isFolder: true,
            items: [
              {
                id : "13",
                name : "Basics.js",
                isFolder : false,
                items : []
              }
            ]
          }
        ]
      },
      {
        id:"7",
        name: "Downloads",
        isFolder: true,
        items: [
          {
            id:"8",
            name: "Anaconda",
            isFolder: false,
            items: []
          },
          {
            id:"9",
            name: "React",
            isFolder: false,
            items: []
          },
          {
            id:"10",
            name: "Node",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id:"11",
        name: "Pictures",
        isFolder: true,
        items: [
          {
            id : "12",
            name : "Akhil.jpg",
            isFolder : false,
            items : []
          }
        ]
      }
    ]
  };
  
  export default explorer;