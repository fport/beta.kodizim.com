import dynamic from 'next/dynamic'

const RemoteMentor = dynamic(
    () => import("kodizimMentorAndMentee/Mentor"),
    {ssr: false}
)

export default function Mentor() {
    return (
        <RemoteMentor/>
    )
}