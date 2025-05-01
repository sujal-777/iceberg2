import Expert from "@/components/CarrerSection/Expert";
import Requirement from "@/components/CarrerSection/Requirement";
import JobApplication from "@/components/CarrerSection/Apply"

export default function PAGE() {
    return (
        <div className="overflow-hidden">
            <Expert />
            <Requirement />
            <JobApplication />
        </div>
    )
}