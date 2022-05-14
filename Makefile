.DEFAULT_GOAL := help

.PHONY: build 
build: ## generate frontend build and copy it to backend's root
	(cd frontend && npm run build && mv build ../climetlab_script_web/build)

.PHONY: help
help: ## Show help message
		@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[$$()% 0-9a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
