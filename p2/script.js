const products = [
  { id: 1, name: "p1", price: 34 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 75 },
];

 function showpro()
    {
        let x="";
        for(let i=0;i<products.length;i++)
        {
            let pro=products[i];
            x+=` <div class="box"><h2> ${pro.id}</h2> <h2> ${pro.name}</h2> <h2> ${pro.price}</h2> <button onClick="add(${pro.id})"> Add</button>  </div>`;
        }
        document.getElementById("root").innerHTML=x;
    }