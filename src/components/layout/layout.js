import s from './layout.module.css';

const Layout = ({id, title, descr, urlBg = false, colorBg = false}) => {
 const styleBg = urlBg ? {background: `url(${urlBg}) center no-repeat`, backgroundSize: 'cover' } : { background: colorBg };
 const styleInline = (urlBg || colorBg) ? styleBg : {};

 return (
  <>
   <section 
    className={s.root} 
    id={('layout_' +  id) }
    style={styleInline}
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
       descr && 
       <div className={`${s.desc} ${s.full}`}>
        <p>{descr}</p>
       </div>
      }
     </article>
    </div>
   </section>
  </>
 )
}

export default Layout;