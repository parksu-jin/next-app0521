// 반복문 만들어서 가져오기 할것
import Link from "next/link";

export default function CaseList({cast}){
    return(
        <div>
                {cast.map((member) => (
                    <Link href="/member/[id]" as ={`/member/${member.id}`} key={member.id}>
                        <p>{member.name}</p>
                      </Link>
                     ) 
                   )
                 }
        </div>
    )
}