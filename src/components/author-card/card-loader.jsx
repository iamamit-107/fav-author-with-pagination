import React from "react";

export default function CardLoader() {
	return (
		<div className="border shadow rounded-md p-4 max-w-sm w-full mx-auto">
			<div className="animate-pulse flex space-x-4">
				<div className="flex-1 space-y-6 py-1">
					<div className="h-10 bg-slate-200 rounded"></div>
					<div className="space-y-3">
						<div className="h-2 bg-slate-200 rounded"></div>
						<div className="h-2 bg-slate-200 rounded"></div>
						<div className="h-2 bg-slate-200 rounded"></div>
						<div className="h-2 bg-slate-200 rounded"></div>
						<div className="h-2 bg-slate-200 rounded"></div>
					</div>
					<div className="h-10 mt-5 bg-slate-200 rounded"></div>
				</div>
			</div>
		</div>
	);
}
