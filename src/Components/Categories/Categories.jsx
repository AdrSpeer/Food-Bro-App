import "./Categories.css";
import foodTable from "../../../public/data";

const Categories = () => {

    const categories = [...new Set(foodTable.map(item => item.category))];
    /*const items = foodTable.filter(item => item.category === category);*/

    return (
        <section className="category-container">
            <div className="category-btn">
            {categories.map(category => (
                    <button className="cate-btn" key={category}>{category}</button>
                ))}
            </div>
        </section>
    );
}
 
export default Categories;