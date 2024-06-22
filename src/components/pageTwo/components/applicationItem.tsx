
function ApplicationItem(props: { url: string }) {
    const { url } = props
    return (
        <div className='flex align-center justify-center'>
            <div className='w-190 h-380 rounded-2xl overflow-hidden shadow-md'>
                <img className='w-full h-full' src={url} alt="" />
            </div>
        </div>
    )
}
export default ApplicationItem