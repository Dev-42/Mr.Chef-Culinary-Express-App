let cardContainer = document.getElementById('cardContainer');

      async function getData() {
        try {
          let res = await fetch('http://localhost:3000/foods');
          let data = await res.json();
          displayData(data);
        } catch (err) {
          console.log("Error", err);
        }
      }

      getData();

      function displayData(data) {
        cardContainer.innerHTML = "";

        data.forEach((item) => {
          let cardCol = document.createElement('div');
          cardCol.setAttribute('class', 'col');
        //   cardCol.style.height = '24rem'

          let card = document.createElement('div');
          card.style.width = '18rem';
          card.setAttribute('class', 'card h-100');

          let img = document.createElement('img');
          img.setAttribute('class', 'card-img-top');
          img.setAttribute('src', item.img);

          let cardBody = document.createElement('div');
          cardBody.setAttribute('class', 'card-body');

          let h5 = document.createElement('h5');
          h5.setAttribute('class', 'card-title');
          h5.innerText = item.title;

          let p = document.createElement('p');
          p.setAttribute('class', 'card-text');
          p.innerText = item.description;

          let paraPrice = document.createElement('p');
          paraPrice.innerText = item.price;

          cardBody.append(h5, p, paraPrice);

          let btn = document.createElement('button');
          btn.setAttribute('type', 'button');
          btn.setAttribute('class', 'btn btn-danger');
          btn.setAttribute('id', 'btn1221');
          btn.innerText = "Order Now";

          card.append(img, cardBody, btn);
          cardCol.append(card);
          cardContainer.append(cardCol);
        });
      }