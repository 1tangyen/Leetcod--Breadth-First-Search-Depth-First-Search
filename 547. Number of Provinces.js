/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
	const set = new Set();
	let count = 0;

	for (let row = 0; row < isConnected.length; row++) {
		if (!set.has(row)) {
			dfs(row, set);
			count++;
		}
	}
	return count;

	function dfs(row, set) {
		for (let col = 0; col < isConnected[0].length; col++) {
			if (isConnected[row][col] === 1 && !set.has(col)) {
				set.add(col);
				dfs(col, set);
			}
		}
	}
};
