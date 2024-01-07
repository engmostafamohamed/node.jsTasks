class Tasks {
  isValidBrackets(input) {
    try {
      const counts = {};
      const regex = /(\(|\)|\{|\}|\[|\])/g;
      const match = input.match(regex);
      match.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
      });
      if (
        counts["{"] === counts["}"] &&
        counts["("] === counts[")"] &&
        counts["["] === counts["]"]
      ) {
        return "true";
      }
      return "false";
    } catch (error) {
      throw error;
    }
  }
  removeDuplicates(arr) {
    try {
      return [...new Set(arr)];
    } catch (error) {
      throw error;
    }
  }
  hasSubsetSum(arr, targetSum, arrLength) {
    try {
      if (targetSum == 0) {
        return true;
      }
      if (arrLength === 0) {
        return false;
      }
      if (arr[arrLength - 1] > targetSum) {
        return this.hasSubsetSum(arr, targetSum, arrLength - 1);
      }
      return (
        this.hasSubsetSum(arr, targetSum - arr[arrLength - 1], arrLength - 1) ||
        this.hasSubsetSum(arr, targetSum, arrLength - 1)
      );
    } catch (error) {
      throw error;
    }
  }
  commonPrefix(arr) {
    try {
      if (arr.length <= 1) {
        return arr[0];
      }
      let i = 0;
      while (arr[0][i] && arr.every((item) => item[i] === arr[0][i])) i++;
      return arr[0].substr(0, i);
    } catch (error) {
      throw error;
    }
  }
}
export default Tasks;
