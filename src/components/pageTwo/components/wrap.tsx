function Wrap(props: { children: React.ReactNode, title?: string, desc?: string | undefined, target: string }) {
    const { children, title, desc, target } = props
    return (
        <div id={target}>
            <div className="w-full text-3xl font-bold mb-16 text-center">{title}</div>
            {desc && <div className="lg:w-3/5 md:-4/5 text-base text-center mx-auto text-gray-700">{desc}</div>}
            {children}
        </div>
    )
}
export default Wrap