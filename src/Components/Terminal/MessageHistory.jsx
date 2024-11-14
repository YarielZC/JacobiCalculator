export function MessageHistory ({ message }) {
  console.log(message)
  return (

    <p className="border-b-[1px] border-[#1f2d42] rounded-md pl-2 pb-1"><span className="text-white/40">{`${message.sended}`}:</span> {`${message.content}`}</p>

  )
}
