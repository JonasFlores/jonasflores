import ConvertTool from "@/app/converter-tool/converter-tool";
import SignLine from "@/app/components/curriculum-vitae/signLine";
import Link from "next/link";


export default function Page(){
	return (
		<div>

			<div className=" flex flex-row m-4 gap-4 sm:w-1/2 sm:mx-auto">
				<div className="basis-1/2 text-center bg-teal-500 opacity-70 p-1 rounded-md text-white border border-teal-600 shadow-md hover:font-medium">
					<Link href={'/curriculum-vitae'}>Curriculum</Link>
				</div>
				<div className="basis-1/2 text-center bg-teal-500 opacity-70 p-1 rounded-md text-white border border-teal-600 shadow-md hover:font-medium ">
					<Link href={'/curriculum-vitae/cover-letter'}>Cover Letter</Link>
				</div>
			</div>

			<hr className="mt-2 mb-6 border-dotted border-teal-600"/>

			<ConvertTool />
			<SignLine />
		</div>

)}