standard && {
	echo Result of \`require\(\'$(pwd)\'\)\`
	node -p "require('.')"
}
