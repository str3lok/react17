import s from './layout.module.css';

const Layout = ({id, title, urlBg = false, colorBg = false, children}) => {
  const style = {};
  if(urlBg) { style.backgroundImage = `url(${urlBg})`}
  if (colorBg) { style.backgroundColor = colorBg }
 return (
  <>
   <section 
    className={s.root} 
    id={('layout_' +  id) }
    style={style}
   >
    <div className={s.wrapper}>
     <article>
      { title &&
       <div className={s.title}>
          <h3>{title}</h3>
        <span className={s.separator}></span>
       </div>
      }
      {
       (children) && 
       <div className={`${s.desc} ${s.full}`}>
        { children }
       </div>
      }
     </article>
    </div>
   </section>
  </>
 )
}

export default Layout;