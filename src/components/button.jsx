import './styles/Button.css'
function button(props) {
    const more = props.more
    return (
        <section className='button'>
            <button className='orange-button'>
                Learn More
            </button>
        </section>
    )

}
export default button