import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const CardDescription = ({ description }: { description: string }) => {
    const getShortDescription = (description: string, maxLength = 120) => {
        if (description.length <= maxLength) return description;
        return description.substring(0, maxLength).trim() + '...';
    };

    const [isExpanded, setIsExpanded] = useState(false)

    return <div className="mb-4">
        <p className="text-gray-300 leading-relaxed">
            {isExpanded
                ? description
                : getShortDescription(description)}
        </p>

        {description.length > 120 && (
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 flex items-center group"
            >
                <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                {isExpanded ? (
                    <ChevronUp className="w-4 h-4 ml-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                ) : (
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:translate-y-0.5 transition-transform duration-200" />
                )}
            </button>
        )}
    </div>
}