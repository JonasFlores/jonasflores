export default function SignLine(){
  let date = new Date()
  const currentMonth = date.getMonth()
  const currentYear = date.getFullYear()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']

  return (
    <>
    <hr className="mt-14"/>
      <div className="text-xs text-right font-semibold">
        Jonas da Silva Flores
        <br/>
        Queenstown, {months[currentMonth]} {currentYear}
      </div>
    </>
  )
}