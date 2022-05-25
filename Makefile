.DEFAULT_GOAL := help

.PHONY: build lint format test npm


build: ## generate frontend build and copy it to backend's root
	(cd frontend && npm run build && mv build ../climetlab_script_web/build)

lint: ## Run linters: flake8 and eslint
	(cd frontend && npm run lint)
	(cd climetlab_script_web && flake8 .)

format: ## Run formatter: black and prettier
	(cd frontend && npm run format)
	(cd climetlab_script_web && black .)

test: ## Run tests: pytest and npm
	(cd frontend && npm test)
	pytest -v

.PHONY: help
help: ## Show help message
		@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[$$()% 0-9a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
