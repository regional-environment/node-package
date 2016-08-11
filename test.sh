standard && {
	echo Result of \`require\(\'$(pwd)\'\)\`
	node -p "require('.')"
} && {
	echo "You have passed 2 tests but you still fucking fail! Look at the exit code, awesome, isn't it?!"
	exit 1234
}
