function MyProps(props){
    console.log(props);
    // props.name='ron';
    return(
        <>
        <h1>name:{props.name}</h1>
        </>
    )
}
export default MyProps;