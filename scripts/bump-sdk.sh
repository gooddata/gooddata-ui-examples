#!/bin/bash

# go to every example- directory and upgrade all packages in @gooddata scope
# since there are unlikely to be any non-sdk packages used, this is good enough (no need for explicit package lists)
find . -name "example-*" -type d -exec bash -c "cd '{}' && yarn upgrade --scope '@gooddata' --latest && npx yarn-deduplicate" \;
