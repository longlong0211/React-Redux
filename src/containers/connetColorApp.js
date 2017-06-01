import {connect} from 'react-redux';
import ColorApp from './../components/app.js'
import {mapStateToProps,mapDispatchToProps} from './../store/store.js'

//connect连接redux和react，将接受Provider传递的store，生成一个容器组件。Provider包裹的就是该容器组件
const ColorAppVisible =  connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorApp);

export default ColorAppVisible