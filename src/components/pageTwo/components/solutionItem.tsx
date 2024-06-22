import './index.css'
function SolutionItem(props: { url: string, desc: string }) {
    const { url, desc } = props
    return (
        <div className='flex align-center justify-center'>
            <div className='w-380 h-300 rounded-2xl shadow-lg p-20 content-box hover:scale-110'>
                <img className='w-full h-180 object-cover   rounded-xl' src={url} alt="" />
                <span className='title-before relative text-center text-xl font-blod block mt-8 max-h-[calc(full-180px)] overflow-hidden '>{desc}</span>
            </div>
        </div>
    )
}
export default SolutionItem