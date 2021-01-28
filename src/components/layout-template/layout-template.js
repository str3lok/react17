import Layout from '../layout';

import BgOne from "../../images/bg2.jpg";
import BgTwo from "../../images/bg1.jpg";

const layoutData = [
  {title: 'Pokemon One', descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, repudiandae. Numquam dignissimos reiciendis ullam, magni voluptatum totam tenetur aperiam vel. Sed voluptate repellendus vitae nostrum nobis fugit nihil ad ex!", urlBg: BgOne},
  {title: 'Layout 2', descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, repudiandae. Numquam dignissimos reiciendis ullam, magni voluptatum totam tenetur aperiam vel. Sed voluptate repellendus vitae nostrum nobis fugit nihil ad ex!", colorBg: '#f19e75'},
  {title: 'Layout 3', descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, repudiandae. Numquam dignissimos reiciendis ullam, magni voluptatum totam tenetur aperiam vel. Sed voluptate repellendus vitae nostrum nobis fugit nihil ad ex!", urlBg: BgTwo }
];
const LayoutContent = layoutData.map((it, index) => 
  <Layout
    key={index.toString()}
    id={index}
    title={it.title}
    descr={it.descr}
    urlBg={it.urlBg}
    colorBg={it.colorBg}
  /> 
);

const LayoutTemplate = () => {
 return (
  <>
  { LayoutContent }
  </>
 )
} 

export default LayoutTemplate;