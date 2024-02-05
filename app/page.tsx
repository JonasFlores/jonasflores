import Header from "./components/curriculum-vitae/header";
import SignLine from "./components/curriculum-vitae/signLine";

export default function Page(){
	return (
		<div className="text-slate-700">
		
			<Header/>

			<div className="mx-5">

				{/* About me */}
				<div>
					<h2 className="text-lg font-semibold tracking-wider mb-2">COVER LETTER</h2>
					<div className="text-md">
					<p className="mb-2">
							I have been harbouring the aspiration to return to the IT field, 
							aiming to continue the career I had built over three years in Brazil as a low-code developer. 
							During my time in Brazil, I actively contributed to a significant project with a small team, 
							which afforded me substantial responsibilities and rapid learning opportunities.
							I took a hiatus in my career to embark on my first international journey, 
							seeking new avenues for personal and professional growth.
						</p>
						<p className="mb-2">
							Upon arriving in New Zealand with limited English proficiency, I accepted the first job opportunity I encountered, 
							working diligently to achieve urgent personal goals. Today, having successfully fulfilled my short-term objectives, 
							I feel ready to resume my professional development plan. Along this journey, 
							I have significantly enhanced my communication skills and now possess the confidence to pursue a role 
							where English proficiency is a requirement.
						</p>
						<p className="mb-2">
							I am a free-spirited individual with a thirst for knowledge, 
							finding joy in studying and engaging my mind with puzzles and challenges. 
							Currently, I possess solid technical knowledge in application development, 
							SQL, algorithms, flowcharts, programming logic, application versioning, and systems modelling. 
							I am eager to deepen my expertise in specific languages such as React, Vue, JavaScript, SQL, PHP, HTML, and CSS. 
							I am open to exploring new technologies and expanding my knowledge into different areas of study.
						</p>
						<p className="mb-2">
							In addition to my technical skills, I am willing to delve into various fields of human knowledge purely for leisure, 
							including philosophy, music, psychology, astronomy, physics, mathematics, biology, history, politics, and cultural aspects.
						</p>
						<p className="mb-2">
								I am currently holding a valid work visa until June 2024 and am actively seeking sponsorship opportunities. 
								I am enthusiastic about the prospect of contributing my skills and 
								dedication to your team and look forward to the possibility of discussing how I can add value to your organization.
						</p>
					</div>
				</div>
				
				<SignLine/>			
			</div>
	</div>

)}