import React, {Component} from 'react';
import styles from './settings.css';

class FoodOrderApp extends Component {
    constructor(props) {
        super(props);
        this.state = { orderDetails : [{id:1,name:'Pasta Carbonara',price:12,qty:0},
            {id:2,name:'Margherita Pizza',price:27,qty:0},
            {id:3,name:'Mushroom Risotto',price:16,qty:0},
            {id:4,name:'Panzenella',price:10,qty:0},
            {id:5,name:'Bruschetta',price:10,qty:0},
            {id:6,name:'Tiramisu',price:6,qty:0}],
            totalAmount:0
        };
      }

      getMenu(){
        return (
        <div>
        <div className="col-sm-6" >
          <div className="panel panel-primary">
            <div className="menu-header">Menu</div>
            <hr className = "line"></hr>
            <div className="text-border">
              {this.state.orderDetails.map(this.foodMenu,this)}
            </div>
          </div>
        </div>
        </div>
      )
      }

      getOrder(){
        return (
          <div>
        <div className="menu-header">Order</div>
          <hr className = "line"></hr>
        <div className="text-border">
            {this.state.orderDetails.map(this.orderDetails,this)}
        </div>
        </div>
      )
    }

      getFooter(){
        return (
          <div className="footer">
            {this.totalAmount()}   Total: {this.state.totalAmount}
          </div>
        )
      }

    totalAmount(){
        var sum=0;
        this.state.orderDetails.forEach(function(item) {
            sum=sum+item.price*item.qty;
        }, this);
        this.setState({totalAmount: sum });
    }

    foodMenu(list,index){
        return (
             <div class="rounded"><br/>
             <div className="row">
             <div className="col-sm-4" >{list.name}</div>
             <div className="col-sm-4" >${list.price}</div>
             <div className="col-sm-4" >
             <button  type="button" onClick={()=>this.addToCart(list.id)} className={styles.button} key={ list.id }>Add</button>
             </div></div></div>
      )
    }

    addToCart(item){
        var itemArr = this.state.orderDetails;
        for (var index = 0; index < itemArr.length; index++) {
           if(itemArr[index].id === item )
           {
            itemArr[index].qty++;
           }

        }
        this.setState({orderDetails:itemArr})
    }

    removeFromCart(item){
        var itemArr = this.state.orderDetails;
        for (var index = 0; index < itemArr.length; index++) {
           if(itemArr[index].id === item )
           {
            itemArr[index].qty--;
           }
        }
        this.setState({orderDetails:itemArr})
    }

    orderDetails(list,index){
        if(list.qty === 0 )
       { return (
            <div className="row">
            </div>
         )
       }else {
         return (
                <div className="row" class="rounded">
                <div className="col-sm-4" >{list.name}</div>
                <div className="col-sm-4" >${list.price}
                <br/>Qty:{list.qty} </div>
                <div className="col-sm-4" >
                <button type="button" className={styles.button} onClick={()=>this.removeFromCart(list.id)} key={ list.id }>Remove</button>
                </div></div>
         )
         }
     }

    render() {
        return (
            <div className="container-fluid">
            <h1 className="FoodOrderApp-header">Food Ordering App</h1>
            <div className="row">
              {this.getMenu()}
              <div className="col-sm-6" >
              <div className="panel panel-primary">
                  {this.getOrder()}
                  <hr className = "line"></hr>
                  {this.getFooter()}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default FoodOrderApp;
