var options = {
  "key": "rzp_test_O1ff73ARxZXtEC", // Enter the Key ID generated from the Dashboard
  "amount": JSON.parse(localStorage.getItem('totalCartPrice'))*100,
  "currency": "INR",
  "description": "Mr.Chef",
  "image": "../Anas/logo.svg",
  "prefill":
  {
    name: JSON.parse(localStorage.getItem('CustomerName')),
    email: JSON.parse(localStorage.getItem('CustomerEmail')),
    contact: JSON.parse(localStorage.getItem('CustomerPhone'))
  },
  config: {
    display: {
      blocks: {
        utib: { //name for Axis block
          name: "Pay using Axis Bank",
          instruments: [
            {
              method: "card",
              issuers: ["UTIB"]
            },
            {
              method: "netbanking",
              banks: ["UTIB"]
            },
          ]
        },
        bdbl: { //name for Axis block
          name: "Pay using Axis Bank",
          instruments: [
            {
              method: "card",
              issuers: ["BDBL"]
            },
            {
              method: "netbanking",
              banks: ["BDBL"]
            },
          ]
        },
        other: { //  name for other block
          name: "Other Payment modes",
          instruments: [
            {
              method: "card",
              issuers: ["ICIC"]
            },
            {
              method: 'netbanking',
            }
          ]
        }
      },
      hide: [
        {
        method: "upi"
        }
      ],
      sequence: ["block.utib", "block.other"],
      preferences: {
        show_default_blocks: false // Should Checkout show its default blocks?
      }
    }
  },
  config: {
      display: {
        blocks: {
          banks: {
            name: 'Methods with Offers',
            instruments: [
              {
                method: 'wallet',
                wallets: ['olamoney']
              },
              {
                method: 'wallet',
                wallets: ['freecharge']
              },
            ]
          },
        },
        sequence: ['block.banks'],
        preferences: {
          show_default_blocks: true,
        },
      },
    },
  
  "handler": function (response) {
    window.location.href = './succesPay.html'
  },
  "modal": {
    "ondismiss": function () {
      if (confirm("Are you sure, you want to close the form?")) {
        txt = "You pressed OK!";
        console.log("Checkout form closed by the user");
      } else {
        txt = "You pressed Cancel!";
        window.location.href = './unsuccessfulPay.html'
      }
    }
  }
};
var rzp1 = new Razorpay(options);
document.getElementById('btn').addEventListener('click',function(e){
  rzp1.open();
  e.preventDefault();
})