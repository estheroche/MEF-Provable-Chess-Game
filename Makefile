start-frontend:
	cd mefchess && \
	bun run dev

build-backend:
	cd mef-backend && \
	sunodo build 

run-backend:
	cd mef-backend && \
	sunodo run

