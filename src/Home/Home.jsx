import React from 'react';
import Product from '../Product/Product';
import './Home.css'
 const Home = ()=>{

return (
    <div>


    <img className='image' src="https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/305407430_473264021465031_3997848287909056834_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=j9y24rs1zYQAX9FfOVt&tn=MnJvhtD9qS9QtO7U&_nc_ht=scontent.fcai19-4.fna&oh=00_AT_AEVt7YmRmg7OrY9W_reuAQ1sJb3n3F1pmlVXEVEuKrw&oe=63556C89" alt="" />



    <div className='container'>
<Product img="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600" rating={5}/>
<Product img="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600" rating={3}/>
<Product img="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600" rating={4}/>
<Product img="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600" rating={1}/>
<Product img="https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=600" rating={2}/>








    </div>
    </div>
)


 }
export default Home;
