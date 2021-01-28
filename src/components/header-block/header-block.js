import s from './header-block.module.css';
import ReactLogo from '../../images/bg1.jpg';
import {ReactComponent as ReactImg} from '../../images/trees.svg'

const HeaderBlock = ({title, hideBackground=false, descr}) => {
 const styleRoot = hideBackground ? {'background': 'none'} : {}

 return (
  <>
   <div className={s.root} style={styleRoot}>
    <div>
     <ReactImg width="300" />
     <img src={ReactLogo} width="300" alt="" />
     { title && <h1 className={s.title}>{title}</h1>}
     { descr && <p>{descr}</p>}
    </div>
   </div>
  </>
 )
}

export default HeaderBlock;