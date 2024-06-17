export function DressCode() {
  return (
    <div className='flex flex-col items-center justify-center bg-yellow-50 p-10'>
      <h2>Código de vestimenta</h2>
      <div className='flex'>
        <div className='w-1/2 items-center justify-center'>1</div>
        <div className='w-1/2 items-center justify-center'>2</div>
      </div>
      <p>Formal</p>
      <div className='flex items-center'>
        <div className='flex flex-row flex-wrap content-between'>
          <div className='m-2 h-10 w-10 rounded-3xl bg-black'></div>
          <div className='m-2 h-10 w-10 rounded-3xl bg-blue-900'></div>
          <div className='m-2 h-10 w-10 rounded-3xl bg-red-900'></div>
          <div className='m-2 h-10 w-10 rounded-3xl bg-green-900'></div>
        </div>
      </div>
    </div>
  )
}
