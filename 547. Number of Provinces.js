/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
	const set = new Set();
	let count = 0;

	for (let i = 0; i < isConnected.length; i++) {
		if (!set.has(i)) {
			dfs(isConnected, i, set);
			count++;
		}
	}
	return count;
};

function dfs(isConnected, i, set) {
	for (let j = 0; j < isConnected.length; j++) {
		if (isConnected[i][j] === 1 && !set.has(j)) {
			set.add(j);
			dfs(isConnected, j, set);
		}
	}
}
