import dynamic from 'next/dynamic'

const RemoteMentee = dynamic(
    () => import("kodizimMentorAndMentee/Mentee"),
    {ssr: false}
)

export default function Mentee() {
    return (
        <RemoteMentee/>
    )
}