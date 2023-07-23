import styled from '@emotion/styled';

export const HeaderContainer = styled.nav(props => ({
display:'flex',
justifyContent:'space-between',
alignItems:'center',
padding:'16px 32px',
borderBottom: '0.5px solid #C2CEDB',
backgroundColor:'#fff',

'& .breadcrumb':{
fontSize:'.75rem',
fontWeight:'200',
},

'& .exit-btn':{
fontSize:'.75rem',
padding:'10px 32px', 
textAlign:'center',
backgroundColor:'#FF4D4F',
color:'#fff',
borderRadius:'8px',
cursor:'pointer',
},
}));